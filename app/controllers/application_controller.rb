class ApplicationController < ActionController::Base
	#before_action :authenticate_user!	
	protect_from_forgery with: :null_session, prepend: true
	helper_method :sort_column, :sort_direction
end
