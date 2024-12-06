# frozen_string_literal: true

module MipiseAsset
  class Engine < ::Rails::Engine
    initializer 'mipise.assets' do |app|
      p app
      p app.config
      app.config.assets.path << MipiseAsset.assets_path
    end
  end
end
