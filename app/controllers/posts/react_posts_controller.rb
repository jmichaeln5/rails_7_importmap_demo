module Posts
  class Posts::ReactPostsController < PostsController
    before_action :set_as_react_application
    layout "react_application"

    def index
      super
    end

    def show
      super
    end

    def new
      super
    end

    def edit
      super
    end

    def create
      super
    end

    def update
      super
    end

    def destroy
      super
    end

    private

    def set_as_react_application
      @react_application = true
    end

  end
end
