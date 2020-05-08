import React, {Component} from 'react';
import TypeMessageBox from "./right-pane/TypeMessageBox";

class ChattingWindow extends Component {
    render() {
        return (
            <div>
                Hello, World!
                <TypeMessageBox/>
            </div>
        )
    }
}

export default ChattingWindow;