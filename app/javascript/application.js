// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import { Turbo } from "@hotwired/turbo-rails"
Turbo.session.drive = false
import "controllers"
import "bootstrap"

//= require rails-ujs
//= require jquery3
//= require popper
//= require bootstrap
//= require activestorage
//= require turbolinks
//= require_tree .