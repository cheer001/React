import React, { Component } from "react";
import PropTypes from "prop-types";

class Test extends Component {
    render() {
        console.log("test render");
        const { content } = this.props;
        return <div>{content}</div>
    }
}

Test.propTypes = {
    content: PropTypes.string
}

Test.defaultProps = {
    content: "a"
}

export default Test;