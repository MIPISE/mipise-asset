# frozen_string_literal: true

module MipiseAsset
  class Engine < ::Rails::Engine
    initializer 'mipise.assets' do |app|
      p app.present?
      p app.config.present?
      p app.config.assets.present?
      p app.config.assets.paths.present?
      p app.config.assets.paths
      app.config.assets.paths << MipiseAsset.assets_path
    end
  end
end
