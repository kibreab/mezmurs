class ApplicationController < ActionController::Base
	before_action :authenticate_user!	
	protect_from_forgery with: :null_session, prepend: true
end
