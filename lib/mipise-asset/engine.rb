# frozen_string_literal: true

module MipiseAsset
  class Engine < ::Rails::Engine
    initializer "mipise.assets" do |app|
      app.config.assets.precompile << Dir["#{MipiseAsset.images_path}/**/*"].reject { |f| File.directory?(f) }
      app.config.assets.paths << MipiseAsset.images_path
      app.config.assets.paths << MipiseAsset.javascripts_path
      app.config.assets.paths << MipiseAsset.stylesheets_path
    end
  end
end
