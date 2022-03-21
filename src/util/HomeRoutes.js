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
  sub1: [
    {
      Id: 1,
      path: "/home/search_document_warehouse",
      component: FindBox,
      wording: "ค้นหากล่องเอกสาร <br/> (สำหรับเจ้าหน้าที่งานคลัง)",
      view_role: ["admin", "user"],
      menu_wording: "ค้นหากล่องเอกสาร",
    },
    {
      Id: 2,
      path: "/home/search_document_user",
      component: test,
      wording: "ค้นหาเอกสาร <br/> (สำหรับผู้ขอเบิกเอกสาร)",
      view_role: ["admin", "user"],
      menu_wording: "ค้นหาเอกสาร / ขอเบิกเอกสาร",
    },
    {
      Id: 3,
      path: "/home/store_document",
      component: StoreDocument,
      wording: "จัดเก็บเอกสาร",
      view_role: ["admin", "user"],
      menu_wording: "จัดเก็บเอกสาร",
    },
    {
      Id: 4,
      path: "/home/requisition_document",
      component: Requisition,
      wording: "เบิกเอกสาร",
      view_role: ["admin", "user"],
      menu_wording: "เบิก / คืนเอกสาร",
    },
    {
      Id: 5,
      path: "/home/transpose_document",
      component: MoveDocument,
      wording: "ย้ายเอกสาร",
      view_role: ["admin", "user"],
      menu_wording: "โอนย้ายเอกสาร",
    },
    {
      Id: 6,
      path: "/home/tracking_document",
      component: TrackDocument,
      wording: "ติดตามการเบิกเอกสาร",
      view_role: ["admin", "user"],
      menu_wording: "ติดตามการเบิกเอกสาร",
    },
    {
      Id: 7,
      path: "/home/registration_document",
      component: ResgisTRY,
      wording: "ทะเบียนตรวจรับเอกสาร",
      view_role: ["admin", "user"],
      menu_wording: "ทะเบียนตรวจรับเอกสาร",
    },
    // {
    //   Id: 8,
    //   path: "/home/upload_DIM_document",
    //   component: test,
    //   wording: "อัพโหลดเอกสารเข้า DIM",
    //   view_role: ["admin", "user"],
    //   menu_wording: "อัพโหลดเอกสารเข้า DIM",
    // },
  ],
  sub2: [
    {
      Id: 9,
      path: "/home/requisition_list_report",
      component: RequistReport,
      wording: "รายการใบเบิกเอกสาร",
      view_role: ["admin", "user"],
      menu_wording: "รายการใบเบิกเอกสาร",
    },
    {
      Id: 10,
      path: "/home/requisition_conclusion_report",
      component: RequisconclusionReport,
      wording: "สรุปผลการปฏิบัติงานการเบิกเอกสาร",
      view_role: ["admin", "user"],
      menu_wording: "สรุปผลการปฏิบัติงานการเบิกเอกสาร",
    },
    {
      Id: 11,
      path: "/home/claim_statistics_report",
      component: ClaimStatisticsReport,
      wording: "รายงานสถิติการจัดเก็บเอกสารสินไหม",
      view_role: ["admin", "user"],
      menu_wording: "รายงานสถิติการจัดเก็บเอกสารสินไหม",
    },
  ],
};

export default HomeRoutes;
