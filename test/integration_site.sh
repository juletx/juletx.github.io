#!/usr/bin/env bash
set -euo pipefail

tmp_dir="$(mktemp -d)"
tmp_override="${tmp_dir}/site-test-override.yml"
tmp_site="${tmp_dir}/site"

cleanup() {
  rm -rf "${tmp_dir}"
}
trap cleanup EXIT

cat >"${tmp_override}" <<'YAML'
imagemagick:
  enabled: false
YAML

JEKYLL_ENV=production bundle exec jekyll build \
  --disable-disk-cache --config "_config.yml,${tmp_override}" -d "${tmp_site}" >/dev/null

for page in index.html publications/index.html projects/index.html repositories/index.html cv/index.html 404.html; do
  [ -s "${tmp_site}/${page}" ] || {
    echo "expected generated page ${page}" >&2
    exit 1
  }
done

grep -q 'Julen Etxaniz' "${tmp_site}/index.html"
grep -q 'Academic Website' "${tmp_site}/projects/index.html"
grep -q 'github-stats-extended.vercel.app/api/top-langs/' "${tmp_site}/repositories/index.html"
grep -q '/assets/css/tailwind.css' "${tmp_site}/index.html"
grep -q 'Postdoctoral Researcher in NLP' "${tmp_site}/cv/index.html"
grep -q 'Best Resource Paper Award' "${tmp_site}/cv/index.html"
if grep -q '/assets/css/bootstrap-compat.css' "${tmp_site}/index.html"; then
  echo "Bootstrap compatibility stylesheet loaded while compatibility is disabled" >&2
  exit 1
fi

if grep -q '/assets/js/bootstrap-compat.js' "${tmp_site}/index.html"; then
  echo "Bootstrap compatibility runtime loaded while compatibility is disabled" >&2
  exit 1
fi

[ ! -e "${tmp_site}/test" ] || {
  echo "test harness leaked into the published site" >&2
  exit 1
}

if grep -R -E -q '(href|src)="/al-folio/' "${tmp_site}" --include='*.html'; then
  echo "legacy /al-folio base URL found in generated HTML" >&2
  exit 1
fi

if grep -R -q 'https://distill.pub/template.v2.js' "${tmp_site}" --include='*.html'; then
  echo "remote Distill loader found in generated HTML" >&2
  exit 1
fi

echo "site integration checks passed"
