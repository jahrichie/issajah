class PagesController < ActionController::Base
  def home_page
    render json: {
      cool: 200
    }

  end
end
