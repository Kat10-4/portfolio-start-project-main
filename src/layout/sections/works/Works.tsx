import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/proj-1.jpeg"
import timerImg from "../../../assets/images/proj-2.jpeg"
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'
import {TabsStatusTypes} from "./tabMenu/TabMenu";
import {AnimatePresence, motion} from "framer-motion"

const tabsItems: Array<{ title: string, status: TabsStatusTypes }>
    = [
    {title: "All", status: "all"},
    {title: "landing page", status: "landing"},
    {title: "React", status: "react"},
    {title: "spa", status: "spa"}]

const worksData = [{
    title: 'Social Network',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    src: socialImg,
    type: "spa",
    id: 1
},
    {
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        src: timerImg,
        type: "react",
        id: 2
    }]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter((work) => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter((work) => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter((work) => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusTypes) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={'space-between'} align={"flex-start"} wrap={"wrap"}>
                    <AnimatePresence>
                        {filteredWorks.map((w, index) => {
                            return (
                                <motion.div
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}>
                                    <Work title={w.title} key={w.id}
                                          text={w.text}
                                          src={w.src}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};



