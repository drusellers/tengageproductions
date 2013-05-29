ROOT = File.dirname(__FILE__)
$LOAD_PATH << './lib'

require 'sinatra'
require 'yaml'
require 'kramdown'
require 'TenGage'

use Rack::Static, :urls => ['/type','/images','/scripts','/styles'], :root => 'public'
use Rack::Session::Cookie, :key => 'rack.session',
                           :domain => 'tengage.com',
                           :path => '/',
                           :expire_after => 2592000, #In seconds
                           :secret => 'get a room' # a secret for cookies

run TenGage::Home
