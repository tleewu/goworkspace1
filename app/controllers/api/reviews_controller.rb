class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    if @review.save
      Workspace.update_ratings(review_params)
      render json: @review
    else
      render json: @review.errors.full_messages
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render json: @review
  end

  private

  def review_params
    params.require(:review).permit(:body, :overall, :wifi, :power, :workspace_id,
                                   :seating, :pricing)
  end
end
