var SortArea = React.createClass({

    render() {




        return(
            <div className=" sort-container">

                <AllUserLikes                     
                    current_user={this.props.current_user} />  

            	<div className="pull-right sort-items-holder">

            		<div className="sort-item pull-left">
            			<div className="text-area">
            				<div className="english-text">
            					Most liked
            				</div>
            				<div className="amharic-text amharic">
            					በብዛት የተወደዱ
            				</div>
                            <div className="sort-icon-container">
                                <i className="sort-icons fa fa-arrow-down action-icon"></i>
                            </div>                            
            			</div>
            			
            		</div>
            		<div className="sort-item pull-left">
            			<div className="text-area">
            				<div className="english-text">
            					Singer name
            				</div>
            				<div className="amharic-text amharic">
            					በዘማሪ ስም
            				</div>            				
            			</div>
            		</div>        
					<div className="sort-item pull-left">
            			<div className="text-area">
            				<div className="english-text">
            					Song title
            				</div>
            				<div className="amharic-text amharic">
            					በመዝሙር አርስት
            				</div>            				
            			</div>
            		</div>         

            	</div>

            </div>            
        )
    }
});