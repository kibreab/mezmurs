var AddLyricsButton = React.createClass({

    render() {
      var targetId = "#add-lyrics-modal-"+this.props.song.id;      
      return(    
		<button className="mz-btns btns-small" type="button" data-toggle="modal" data-target={targetId} >
           <span>Add lyrics </span>  
           <span className="fa fa-plus" />           
        </button>
      )
    }
  }
)