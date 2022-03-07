module Posts
  class Posts::VuePostsController < PostsController
    before_action :set_as_vue_application
    layout "vue_application"

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

    # def index
    #   @posts = Post.all
    # end
    #
    # def show
    # end
    #
    # def new
    #   @post = Post.new
    # end
    #
    # def edit
    # end
    #
    # def create
    #   @post = Post.new(post_params)
    #
    #   respond_to do |format|
    #     if @post.save
    #       format.html { redirect_to post_url(@post), notice: "Post was successfully created." }
    #       format.json { render :show, status: :created, location: @post }
    #     else
    #       format.html { render :new, status: :unprocessable_entity }
    #       format.json { render json: @post.errors, status: :unprocessable_entity }
    #     end
    #   end
    # end
    #
    # def update
    #   respond_to do |format|
    #     if @post.update(post_params)
    #       format.html { redirect_to post_url(@post), notice: "Post was successfully updated." }
    #       format.json { render :show, status: :ok, location: @post }
    #     else
    #       format.html { render :edit, status: :unprocessable_entity }
    #       format.json { render json: @post.errors, status: :unprocessable_entity }
    #     end
    #   end
    # end
    #
    # def destroy
    #   @post.destroy
    #
    #   respond_to do |format|
    #     format.html { redirect_to posts_url, notice: "Post was successfully destroyed." }
    #     format.json { head :no_content }
    #   end
    # end

    private

    def set_as_vue_application
      @vue_application = true
    end

  end
end
