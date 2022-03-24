// eslint-disable-next-line
import React from "react";
import StoreDocument from "../pages/storedocument/StoreDocument";
import ClaimStatisticsReport from "../pages/claimstatisticsreport/ClaimStatisticsReport";
import test from "../pages/finddocumentContainer/test";
import FindBox from "../pages/FindDocumentBox.js/FindDocumentBox";
//import Find from '../pages/finddocument/FindDocument'
import MoveDocument from "../pages/movedocument/MoveDocument";
import TrackDocument from "../pages/trackdocument/TrackDocument";
import RequistReport from "../pages/requistreport/RequistReport";
import SearchDocument from "../pages/finddocument/SearchDocument";
// import SearchMain from "../component/SearchingMain/Searchmain";
import SearchDocumentBox from "../pages/finddocumentContainer/SearchDocumentBox";
import Resgistration from "../pages/Registration_Document/Registration_Document";
import ResgisTRY from "../pages/Registration_Document/ResgisTRY";
import Requisition from "../pages/requisition_document/Requisition_document";
import RequisconclusionReport from "../pages/requisitionconclusionReport/RequisitionconclusionReport";

const HomeRoutes = {
  document_menu: [
    {
      Id: 1,
      path: "/home/search_document_warehouse",
      component: FindBox,
      wording: "ค้นหากล่องเอกสาร <br/> (สำหรับเจ้าหน้าที่งานคลัง)",
      menu_wording: "ค้นหากล่องเอกสาร",
      menu_id: "MWH1001",
    },
    {
      Id: 2,
      path: "/home/search_document_user",
      component: test,
      wording: "ค้นหาเอกสาร <br/> (สำหรับผู้ขอเบิกเอกสาร)",
      menu_wording: "ค้นหาเอกสาร / ขอเบิกเอกสาร",
      menu_id: "MWH1002",
    },
    {
      Id: 3,
      path: "/home/store_document",
      component: StoreDocument,
      wording: "จัดเก็บเอกสาร",
      menu_wording: "จัดเก็บเอกสาร",
      menu_id: "MWH1003",
    },
    {
      Id: 4,
      path: "/home/requisition_document",
      component: Requisition,
      wording: "เบิกเอกสาร",
      menu_wording: "เบิก / คืนเอกสาร",
      menu_id: "MWH1004",
    },
    {
      Id: 5,
      path: "/home/transpose_document",
      component: MoveDocument,
      wording: "ย้ายเอกสาร",
      menu_wording: "โอนย้ายเอกสาร",
      menu_id: "MWH1005",
    },
    {
      Id: 6,
      path: "/home/tracking_document",
      component: TrackDocument,
      wording: "ติดตามการเบิกเอกสาร",
      menu_wording: "ติดตามการเบิกเอกสาร",
      menu_id: "MWH1006",
    },
    {
      Id: 7,
      path: "/home/registration_document",
      component: ResgisTRY,
      wording: "ทะเบียนตรวจรับเอกสาร",
      menu_wording: "ทะเบียนตรวจรับเอกสาร",
      menu_id: "MWH1007",
    },
  ],
  report_menu: [
    {
      Id: 8,
      path: "/home/requisition_list_report",
      component: RequistReport,
      wording: "รายการใบเบิกเอกสาร",
      menu_wording: "รายการใบเบิกเอกสาร",
      menu_id: "MWH2001",
    },
    {
      Id: 9,
      path: "/home/requisition_conclusion_report",
      component: RequisconclusionReport,
      wording: "สรุปผลการปฏิบัติงานการเบิกเอกสาร",
      menu_wording: "สรุปผลการปฏิบัติงานการเบิกเอกสาร",
      menu_id: "MWH2002",
    },
    {
      Id: 10,
      path: "/home/claim_statistics_report",
      component: ClaimStatisticsReport,
      wording: "รายงานสถิติการจัดเก็บเอกสารสินไหม",
      menu_wording: "รายงานสถิติการจัดเก็บเอกสารสินไหม",
      menu_id: "MWH2003",
    },
  ],
  maintain_permission: [
    {
      Id: 11,
      path: "/home/maintain/group",
      component: Resgistration,
      wording: "กลุ่มผู้ใช้งาน",
      menu_wording: "กลุ่มผู้ใช้งาน",
      menu_id: "MWH3001",
    },
    {
      Id: 12,
      path: "/home/maintain/user",
      component: Resgistration,
      wording: "หน้าจอผู้ใช้งาน",
      menu_wording: "หน้าจอผู้ใช้งาน",
      menu_id: "MWH3002",
    },
  ],
};

export default HomeRoutes;
