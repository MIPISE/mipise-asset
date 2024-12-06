# frozen_string_literal: true

module MipiseAsset
  class Engine < ::Rails::Engine
    p MipiseAsset.assets_path
    initializer 'mipise.assets' do |app|
      p MipiseAsset.assets_path
      app.config.assets.paths << MipiseAsset.assets_path
    end
  end
end
