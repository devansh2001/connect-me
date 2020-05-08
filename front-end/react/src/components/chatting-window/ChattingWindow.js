import React, {Component} from 'react';
import TypeMessageBox from "./right-pane/TypeMessageBox";

class ChattingWindow extends Component {
    render() {
        return (
            <div className={'chatting-window'}>
                {/* insert the current user info component from issue 21 here*/}
                {/* insert the recent chats component from issue 22 here*/}
                <TypeMessageBox/>
            </div>
        )
    }
}

export default ChattingWindow;