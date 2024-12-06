# frozen_string_literal: true
#require 'rails/all'

module MipiseAsset
  class Engine < ::Rails::Engine
    initializer 'mipise.asset' do |app|
      app.config.assets.path << MipiseAsset.assets_path
    end
  end
end
