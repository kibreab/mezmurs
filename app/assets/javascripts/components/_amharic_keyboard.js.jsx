var AmharicKeyboard = React.createClass({
    
    handleLoginKeyUp(item) {
        transcrire();
    },
    render() {
        return(
            <div className="midcol">
                <div className="app">
                    <form name="conversion" method="get" action="" target="">
                        <textarea id='description' id="saisie" onKeyUp={this.handleLoginKeyUp} className="editor"  placeholder="መጻፍ ይጀምሩ..."></textarea>
                    </form>

                </div>
            </div>

        )
    }
});