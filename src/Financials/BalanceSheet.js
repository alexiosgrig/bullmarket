// A Component that has data tables for a stock's Balance sheet

import React, { useState, useEffect, useContext } from "react";
import { financialmodelingprepApikey } from "../apikey/apikey";
import { Context } from "../Context/Context";
// Importing Hooks, Context and API key
export const divider = 1000000;
export const checkNumbers = (attribute, constant) => {
  if (attribute === undefined) {
    console.log(attribute);
    return (attribute = "-");
  } else if (attribute === NaN) {
    return attribute;
  } else if (constant) {
    return attribute / constant;
  } else {
    return attribute;
  }
};
console.log(checkNumbers(10000000000000, divider));
export const BalanceSheet = () => {
  const [context, setContext] = useContext(Context);
  const [dataInfo, setDataInfo] = useState({
    date: [],
    liabilitiesandstockholdersequity: [],
    liabilities: [],
    liabilitiescurrent: [],
    commonstocksharesauthorized: [],
    cashandcashequivalentsatcarryingvalue: [],
    retainedearningsaccumulateddeficit: [],
    liabilitiesnoncurrent: [],
    propertyplantandequipmentnet: [],
    commonstocksincludingadditionalpaidincapital: [],
    commercialpaper: [],
    longtermdebtcurrent: [],
    commonstocksharesoutstanding: [],
    otherliabilitiesnoncurrent: [],
    marketablesecuritiescurrent: [],
    otherliabilitiescurrent: [],
    assetscurrent: [],
    longtermdebtnoncurrent: [],
    contractwithcustomerliabilitycurrent: [],
    nontradereceivablescurrent: [],
    commonstocksharesissued: [],
    stockholdersequity: [],
    accountsreceivablenetcurrent: [],
    accountspayablecurrent: [],
    assets: [],
    assetsnoncurrent: [],
    otherassetscurrent: [],
    otherassetsnoncurrent: [],
    inventorynet: [],
    marketablesecuritiesnoncurrent: [],
    accumulatedothercomprehensiveincomelossnetoftax: [],
  });
  //Initialize some data that we will need to add when we fetch the API
  //
  useEffect(() => {
    fetchBalanceSheet();
  }, [context]);
  // Fetch when context changes
  //
  async function fetchBalanceSheet() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement-as-reported/${context}?limit=10&apikey=${financialmodelingprepApikey}`
    );
    const data = await res.json();
    // fetch financial model API
    //
    //
    console.log(typeof data.date);
    // Function
    setDataInfo({
      date: data
        .map((element) => checkNumbers(element.date))
        .slice(0, 4)
        .reverse(),
      //
      liabilitiesandstockholdersequity: data
        .map((element) =>
          checkNumbers(element.liabilitiesandstockholdersequity, divider)
        )
        .slice(0, 4)
        .reverse(),

      //
      liabilities: data
        .map((element) => checkNumbers(element.liabilities, divider))
        .slice(0, 4)
        .reverse(),
      liabilitiescurrent: data
        .map((element) => checkNumbers(element.liabilitiescurrent, divider))
        .slice(0, 4)
        .reverse(),
      commonstocksharesauthorized: data
        .map((element) =>
          checkNumbers(element.commonstocksharesauthorized, divider)
        )
        .slice(0, 4)
        .reverse(),
      cashandcashequivalentsatcarryingvalue: data
        .map((element) =>
          checkNumbers(element.cashandcashequivalentsatcarryingvalue, divider)
        )
        .slice(0, 4)
        .reverse(),
      retainedearningsaccumulateddeficit: data
        .map((element) =>
          checkNumbers(element.retainedearningsaccumulateddeficit, divider)
        )
        .slice(0, 4)
        .reverse(),
      liabilitiesnoncurrent: data
        .map((element) => checkNumbers(element.liabilitiesnoncurrent, divider))
        .slice(0, 4)
        .reverse(),
      propertyplantandequipmentnet: data
        .map((element) =>
          checkNumbers(element.propertyplantandequipmentnet, divider)
        )
        .slice(0, 4)
        .reverse(),
      commonstocksincludingadditionalpaidincapital: data
        .map((element) =>
          checkNumbers(
            element.commonstocksincludingadditionalpaidincapital,
            divider
          )
        )
        .slice(0, 4)
        .reverse(),
      commercialpaper: data
        .map((element) => checkNumbers(element.commercialpaper, divider))
        .slice(0, 4)
        .reverse(),
      longtermdebtcurrent: data
        .map((element) => checkNumbers(element.longtermdebtcurrent, divider))
        .slice(0, 4)
        .reverse(),
      commonstocksharesoutstanding: data
        .map((element) =>
          checkNumbers(element.commonstocksharesoutstanding, divider)
        )
        .slice(0, 4)
        .reverse(),
      otherliabilitiesnoncurrent: data
        .map((element) =>
          checkNumbers(element.otherliabilitiesnoncurrent, divider)
        )
        .slice(0, 4)
        .reverse(),
      marketablesecuritiescurrent: data
        .map((element) =>
          checkNumbers(element.marketablesecuritiescurrent, divider)
        )
        .slice(0, 4)
        .reverse(),
      otherliabilitiescurrent: data
        .map((element) =>
          checkNumbers(element.otherliabilitiescurrent, divider)
        )
        .slice(0, 4)
        .reverse(),
      assetscurrent: data
        .map((element) => checkNumbers(element.assetscurrent, divider))
        .slice(0, 4)
        .reverse(),
      longtermdebtnoncurrent: data
        .map((element) => checkNumbers(element.longtermdebtnoncurrent, divider))
        .slice(0, 4)
        .reverse(),
      contractwithcustomerliabilitycurrent: data
        .map((element) =>
          checkNumbers(element.contractwithcustomerliabilitycurrent, divider)
        )
        .slice(0, 4)
        .reverse(),
      nontradereceivablescurrent: data
        .map((element) =>
          checkNumbers(element.nontradereceivablescurrent, divider)
        )
        .slice(0, 4)
        .reverse(),
      commonstocksharesissued: data
        .map((element) =>
          checkNumbers(element.commonstocksharesissued, divider)
        )
        .slice(0, 4)
        .reverse(),
      stockholdersequity: data
        .map((element) => checkNumbers(element.stockholdersequity, divider))
        .slice(0, 4)
        .reverse(),
      accountsreceivablenetcurrent: data
        .map((element) =>
          checkNumbers(element.accountsreceivablenetcurrent, divider)
        )
        .slice(0, 4)
        .reverse(),
      accountspayablecurrent: data
        .map((element) => checkNumbers(element.accountspayablecurrent, divider))
        .slice(0, 4)
        .reverse(),
      assets: data
        .map((element) => checkNumbers(element.assets, divider))
        .slice(0, 4)
        .reverse(),
      assetsnoncurrent: data
        .map((element) => checkNumbers(element.assetsnoncurrent, divider))
        .slice(0, 4)
        .reverse(),
      otherassetscurrent: data
        .map((element) => checkNumbers(element.otherassetscurrent, divider))
        .slice(0, 4)
        .reverse(),
      otherassetsnoncurrent: data
        .map((element) => checkNumbers(element.otherassetsnoncurrent, divider))
        .slice(0, 4)
        .reverse(),
      inventorynet: data
        .map((element) => checkNumbers(element.inventorynet, divider))
        .slice(0, 4)
        .reverse(),
      marketablesecuritiesnoncurrent: data
        .map((element) =>
          checkNumbers(element.marketablesecuritiesnoncurrent, divider)
        )
        .slice(0, 4)
        .reverse(),
      accumulatedothercomprehensiveincomelossnetoftax: data
        .map((element) =>
          checkNumbers(
            element.accumulatedothercomprehensiveincomelossnetoftax,
            divider
          )
        )
        .slice(0, 4)
        .reverse(),
    });
  }
  return (
    <div>
      <h1> Balance Sheet</h1>
      <table>
        <tbody>
          <tr>
            <th>About</th>
            {dataInfo.date.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
          <tr>
            <td> Liabilities and Stockholders Equity</td>
            {dataInfo.liabilitiesandstockholdersequity.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Liabilities</td>
            {dataInfo.liabilities.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Liabilities Current</td>
            {dataInfo.liabilitiescurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Common Stock Shares Authorized</td>
            {dataInfo.commonstocksharesauthorized.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Cash and Cash Equivalents at carry ingvalue</td>
            {dataInfo.cashandcashequivalentsatcarryingvalue.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Retained earnings accumulated deficit</td>
            {dataInfo.retainedearningsaccumulateddeficit.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Liabilities non-current</td>
            {dataInfo.liabilitiesnoncurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Cost of goods and services sold</td>
            {dataInfo.liabilitiesnoncurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Property Plant and Equipment Net</td>
            {dataInfo.propertyplantandequipmentnet.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Common stocks Including additional paid in capital</td>
            {dataInfo.commonstocksincludingadditionalpaidincapital.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td> Long Term Debt Current </td>
            {dataInfo.longtermdebtcurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Common Stock Shares Outstanding </td>
            {dataInfo.commonstocksharesoutstanding.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Liabilities Non-current </td>
            {dataInfo.otherliabilitiesnoncurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Marketable Securities Current </td>
            {dataInfo.marketablesecuritiescurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Liabilities Current </td>
            {dataInfo.otherliabilitiescurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Assets Current </td>
            {dataInfo.assetscurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Long Term Debt Non-Current </td>
            {dataInfo.longtermdebtnoncurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Contract with Customer Liability Current </td>
            {dataInfo.contractwithcustomerliabilitycurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Non-Trade Receivables Current </td>
            {dataInfo.nontradereceivablescurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Common Stock Shares Issued </td>
            {dataInfo.commonstocksharesissued.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Stock Holders Equity </td>
            {dataInfo.stockholdersequity.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Accounts Receivable Net Current </td>
            {dataInfo.accountsreceivablenetcurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Accounts Payable Current </td>
            {dataInfo.accountspayablecurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Assets </td>
            {dataInfo.assets.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Assets Non-Current </td>
            {dataInfo.assetsnoncurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Assets Non-Current </td>
            {dataInfo.otherassetsnoncurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Inventory Net </td>
            {dataInfo.inventorynet.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Marketable Securities Non-Current </td>
            {dataInfo.marketablesecuritiesnoncurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Accumulated Other Comprehensive Income Loss Net of Tax </td>
            {dataInfo.accumulatedothercomprehensiveincomelossnetoftax.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td> Other Assets Current </td>
            {dataInfo.otherassetscurrent.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
