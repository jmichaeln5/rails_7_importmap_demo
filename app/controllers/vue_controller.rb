class VueController < ApplicationController
  before_action :set_as_vue_application
  layout "vue_application"

  def index
  end

  private

  def set_as_vue_application
    @vue_application = true
  end

end
