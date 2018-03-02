var AmharicKeyboard = React.createClass({
    
    handleKeyUp() {
        console.log('---------------  please come  ------------------')
        transcrire();
    },
    render() {
        return(
            <div className="midcol text-area-amharic-modal">
                <div className="app">
                    <form name="conversion" method="get" action="" target="">
                        <textarea id="saisie" onKeyUp={this.handleKeyUp} className="editor"  placeholder="መጻፍ ይጀምሩ..."></textarea>
                    </form>

                </div>
            </div>

        )
    }
});