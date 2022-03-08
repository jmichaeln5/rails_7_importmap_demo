class ReactController < ApplicationController
  before_action :set_as_react_application
  layout "react_application"

  def index
  end

  private

  def set_as_react_application
    @react_application = true
  end

end
