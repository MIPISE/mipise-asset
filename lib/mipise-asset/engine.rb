# frozen_string_literal: true

module MipiseAsset
  class Engine < ::Rails::Engine
    initializer 'mipise.assets' do |app|
      p app.present?
      p app.config.present?
      p app.config.assets.present?
      p app.config.assets.path.present?
      p app.config.assets.path
      app.config.assets.path << MipiseAsset.assets_path
    end
  end
end
