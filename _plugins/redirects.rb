# Writes one redirect page per entry in _data/redirects.yml, so URLs from the
# retired marketing site keep working without publishing its content.
module Redirects
  class RedirectPage < Jekyll::PageWithoutAFile
    def initialize(site, from, to)
      super(site, site.source, from, "index.html")
      data["layout"] = "redirect"
      data["redirect_to"] = to
      data["sitemap"] = false
    end
  end

  class Generator < Jekyll::Generator
    safe true

    def generate(site)
      (site.data["redirects"] || {}).each do |from, to|
        site.pages << RedirectPage.new(site, from.sub(%r{\A/}, ""), to)
      end
    end
  end
end
