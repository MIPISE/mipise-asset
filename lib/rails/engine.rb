# frozen_string_literal: true

module MipiseAsset
  module Rails
    class Engine < ::Rails::Engine
      initializer 'mipise.asset' do |app|
        app.config.assets.path << MipiseAsset.assets_path
      end
    end
  end
end
