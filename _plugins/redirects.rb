# Writes one redirect page per entry in _data/redirects.yml, so URLs from the
# retired marketing site keep working without publishing its content.
module Redirects
  class RedirectPage < Jekyll::PageWithoutAFile
    def initialize(site, from, to)
      super(site, site.source, from, "index.html")
      data["layout"] = "redirect"
      data["redirect_to"] = to
    end
  end

  class Generator < Jekyll::Generator
    safe true

    def generate(site)
      (site.data["redirects"] || {}).each do |from, to|
        raise "redirects.yml: #{from} has no target" if to.to_s.strip.empty?
        raise "redirects.yml: #{from} must start and end with /" unless from.start_with?("/") && from.end_with?("/")
        site.pages << RedirectPage.new(site, from.delete_prefix("/"), to)
      end
    end
  end
end
