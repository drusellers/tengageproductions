require 'sinatra/base'

module TenGage
  class Home < Sinatra::Base
    set :root, ROOT
    set :views, ROOT + '/views'
    helpers TenGage::Helpers

    get '/' do
      erb :home
    end
  end
end
