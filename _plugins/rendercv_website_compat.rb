# frozen_string_literal: true

# al_folio_cv 1.0.2 expects a few fields from al-folio's former hybrid CV
# format. Keep _data/cv.yml valid RenderCV input and provide those aliases only
# to Jekyll's in-memory copy of the data.
Jekyll::Hooks.register :site, :post_read do |site|
  cv = site.data.dig("cv", "cv")
  next unless cv.is_a?(Hash)

  cv["label"] ||= cv["headline"]
  cv["address"] ||= { "city" => cv["location"] } if cv["location"]

  sections = cv["sections"]
  next unless sections.is_a?(Hash)

  summary_entries = sections.delete("Summary")
  if summary_entries.is_a?(Array) && summary_entries.first
    first_summary = summary_entries.first
    cv["summary"] ||= first_summary.is_a?(Hash) ? first_summary["text"] || first_summary["bullet"] : first_summary
  end

  Array(sections["Awards"]).each do |entry|
    entry["title"] ||= entry["name"]
    entry["awarder"] ||= entry["location"]
  end

  Array(sections["Skills"]).each do |entry|
    entry["name"] ||= entry["label"]
    entry["keywords"] ||= entry["details"].split(",").map(&:strip) if entry["details"]
  end

  Array(sections["Interests"]).each do |entry|
    entry["keywords"] ||= entry["summary"].split(",").map(&:strip) if entry["summary"]
  end

  Array(sections["Certificates"]).each do |entry|
    entry["issuer"] ||= entry["location"]
  end
end
