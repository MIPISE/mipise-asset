# frozen_string_literal: true

module MipiseAsset
  class Engine < ::Rails::Engine
    initializer 'mipise.assets' do |app|
      app.config.assets.paths << MipiseAsset.assets_path
      p app.config.assets.paths
    end
  end
end
