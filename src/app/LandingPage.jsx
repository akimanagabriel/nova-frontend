import React from 'react'
import Body from "../app/Body";
import LeftBar from "../shared/LeftBar";
import RightBar from "../shared/RightBar";

function LandingPage() {
    return (
        <div className="flex flex-col md:flex-row justify-between gap-0">
            <LeftBar />
            <Body />
            <RightBar />
        </div>
    )
}

export default LandingPage
