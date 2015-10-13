class Api::ImagesController < ApplicationController

  def create
    @image = Image.new(image_params)
    @image.save
    render json: @image
  end

  private

  def image_params
    params.require(:image).permit(:url)
  end

end
