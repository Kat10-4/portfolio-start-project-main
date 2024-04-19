import {Link} from "../../../../components/Link";
import {S} from '../Works_Styles'

export type TabsStatusTypes="all" | "landing" | "spa" | "react"

type TabMenuPropsTypes = {
    tabsItems: Array<{ title: string, status: TabsStatusTypes }>,
    changeFilterStatus: (value: TabsStatusTypes) => void,
    currentFilterStatus: string
}


export const TabMenu = (props: TabMenuPropsTypes) => {
        return (
            <div>
                <S.TabMenu>
                    <ul>
                        {props.tabsItems.map((item, index) => {
                                return <S.ItemList key={index}>
                                    <Link active={props.currentFilterStatus===item.status} as={"button"}
                                          onClick={() => props.changeFilterStatus(item.status)}>{item.title}</Link>
                                </S.ItemList>
                            }
                        )}
                    </ul>
                </S.TabMenu>
            </div>
        )
            ;
    }
;




