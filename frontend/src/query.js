/*
* @Author: Difei Gu
* @Date:   2020-04-30 19:06:28
* @Last Modified by:   Difei Gu
* @Last Modified time: 2020-04-30 20:10:17
*/
//import our graph query parser
import gql from "graphql-tag";

// note the usage of gql with jsvascript string literal
export const PANEL_QUERY = gql`
	{
    	panel(id: 3) {
    		embed_url
    		size
    	}
    }
`