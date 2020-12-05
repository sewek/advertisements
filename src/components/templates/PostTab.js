import React, { Component } from 'react';

class PostTab extends Component {
    constructor(props) {
        super(props)

        this.state = props.node
    }

    render() {
        return (
            <div className="flex">
                <div class="flex-none w-48 relative">
                    <img src="/classic-utility-jacket.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
                </div>
            </div>
        );
    }
}


export default PostTab;