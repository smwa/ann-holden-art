require 'mini_magick'
require 'fileutils'

module Jekyll
  class WatermarkGenerator < Generator
    safe true
    priority :low

    def generate(site)
      Dir.glob('_photos/**/*').each do |file|
        path = destination_path(file)
        if (File.file?(file))
          watermark_image(site, file, path)
        end
      end
    end

    private

    def add_to_static_file(site, path)
      name = File.basename(path)
      destination = File.dirname(path).sub(site.source, '')
      site.static_files << StaticFile.new(site, site.source, destination, name)
    end

    def destination_path(file)
      new_file = String.new(file)
      new_file["_photos"] = "photos"
      FileUtils.mkdir_p(File.dirname(new_file))
      new_file
    end

    def watermark_image(site, file, new_file)
      if (File.exist?(new_file) && File.mtime(new_file) > File.mtime(file))
        return
      end
      image = MiniMagick::Image.open(file)
      result = image.composite(MiniMagick::Image.open('img/watermark.png')) do |c|
        c.gravity "southeast"
      end
      result.write new_file
      result.destroy!
      add_to_static_file(site, new_file)
    end
  end
end
