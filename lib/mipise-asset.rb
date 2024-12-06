# frozen_string_literal: true

module MipiseAsset
  class << self
    def load!
      if defined? ::Rails
        require 'rails/engine'
      end
    end

    def assets_path
      @assets_path ||= File.expand_path('../assets', File.dirname(__FILE__))
    end

    def stylesheets_path
      File.join assets_path, 'stylesheets'
    end

    def javascripts_path
      File.join assets_path, 'javascripts'
    end
  end
end

MipiseAsset.load!