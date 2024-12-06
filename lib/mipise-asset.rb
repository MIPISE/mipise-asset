# frozen_string_literal: true

module MipiseAsset
  class << self
    def load!
      require 'mipise-asset/engine' if defined?(::Rails)
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

    def vendor_path
      @vendor_path ||= File.expand_path('../vendor', File.dirname(__FILE__))
    end
  end
end

MipiseAsset.load!
