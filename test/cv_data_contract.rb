# frozen_string_literal: true

require "date"
require "json"
require "yaml"

rendercv = YAML.safe_load_file("_data/cv.yml", permitted_classes: [Date]).fetch("cv")
jsonresume = JSON.parse(File.read("assets/json/resume.json"))
basics = jsonresume.fetch("basics")
sections = rendercv.fetch("sections")

def assert_equal(actual, expected, label)
  return if actual == expected

  warn "CV data mismatch for #{label}: #{actual.inspect} != #{expected.inspect}"
  exit 1
end

def compare_entries(rendercv_entries, json_entries, fields, section)
  assert_equal(rendercv_entries.length, json_entries.length, "#{section} entry count")

  rendercv_entries.zip(json_entries).each_with_index do |(rendercv_entry, json_entry), index|
    fields.each do |rendercv_key, json_key|
      assert_equal(rendercv_entry[rendercv_key]&.to_s, json_entry[json_key]&.to_s, "#{section}[#{index}].#{rendercv_key}")
    end
  end
end

assert_equal(rendercv["name"], basics["name"], "name")
assert_equal(rendercv["headline"], basics["label"], "headline")
assert_equal(rendercv["email"], basics["email"], "email")
assert_equal(rendercv["website"], basics["url"], "website")
assert_equal(sections.fetch("Summary").first, basics["summary"], "summary")
assert_equal(rendercv["location"], "#{basics.dig("location", "city")}, #{basics.dig("location", "region")}", "location")

rendercv_profiles = rendercv.fetch("social_networks").to_h { |profile| [profile.fetch("network"), profile.fetch("username")] }
json_profiles = basics.fetch("profiles").to_h { |profile| [profile.fetch("network"), profile.fetch("username")] }
assert_equal(rendercv_profiles, json_profiles, "social profiles")

compare_entries(
  sections.fetch("Education"),
  jsonresume.fetch("education"),
  {
    "institution" => "institution",
    "location" => "location",
    "url" => "url",
    "area" => "area",
    "degree" => "studyType",
    "start_date" => "startDate",
    "end_date" => "endDate",
    "highlights" => "highlights"
  },
  "education"
)

compare_entries(
  sections.fetch("Experience"),
  jsonresume.fetch("work"),
  {
    "company" => "name",
    "position" => "position",
    "location" => "location",
    "url" => "url",
    "start_date" => "startDate",
    "summary" => "summary",
    "highlights" => "highlights"
  },
  "work"
)

rendercv_end_dates = sections.fetch("Experience").map { |entry| entry["end_date"] == "present" ? "" : entry["end_date"].to_s }
json_end_dates = jsonresume.fetch("work").map { |entry| entry["endDate"].to_s }
assert_equal(rendercv_end_dates, json_end_dates, "work end dates")

compare_entries(
  sections.fetch("Awards"),
  jsonresume.fetch("awards"),
  { "name" => "title", "date" => "date", "location" => "awarder", "url" => "url", "summary" => "summary" },
  "awards"
)

compare_entries(
  sections.fetch("Languages"),
  jsonresume.fetch("languages"),
  { "name" => "language", "summary" => "fluency" },
  "languages"
)

compare_entries(
  sections.fetch("Certificates"),
  jsonresume.fetch("certificates"),
  { "name" => "name", "date" => "date", "location" => "issuer", "url" => "url" },
  "certificates"
)

rendercv_skills = sections.fetch("Skills").map { |entry| [entry.fetch("label"), entry.fetch("details").split(",").map(&:strip)] }
json_skills = jsonresume.fetch("skills").map { |entry| [entry.fetch("name"), entry.fetch("keywords")] }
assert_equal(rendercv_skills, json_skills, "skills")

rendercv_interests = sections.fetch("Interests").map { |entry| [entry.fetch("name"), entry.fetch("summary").split(",").map(&:strip)] }
json_interests = jsonresume.fetch("interests").map { |entry| [entry.fetch("name"), entry.fetch("keywords")] }
assert_equal(rendercv_interests, json_interests, "interests")

puts "RenderCV and JSON Resume data are synchronized"
