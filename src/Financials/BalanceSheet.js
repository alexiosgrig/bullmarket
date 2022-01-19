import React, { useState, useEffect, useContext } from "react";
import { financialmodelingprepApikey } from "../apikey/apikey";
import { Context } from "../Context/Context";

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
  useEffect(() => {
    fetchBalanceSheet();
  }, [context]);

  async function fetchBalanceSheet() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/balance-sheet-statement-as-reported/${context}?limit=10&apikey=${financialmodelingprepApikey}`
    );
    const data = await res.json();
    setDataInfo({
      date: data
        .map((date) => {
          if (date.date === undefined) {
            return (date.date = "-");
          } else {
            return date.date;
          }
        })
        .slice(0, 4),
      liabilitiesandstockholdersequity: data
        .map((date) => {
          if (date.liabilitiesandstockholdersequity === undefined) {
            return (date.liabilitiesandstockholdersequity = "-");
          } else {
            return date.liabilitiesandstockholdersequity / 1000000;
          }
        })
        .slice(0, 4),
      liabilities: data
        .map((date) => {
          if (date.liabilities === undefined) {
            return (date.liabilities = "-");
          } else {
            return date.liabilities / 1000000;
          }
        })
        .slice(0, 4),
      liabilitiescurrent: data
        .map((date) => {
          if (date.liabilitiescurrent === undefined) {
            return (date.liabilitiescurrent = "-");
          } else {
            return date.liabilitiescurrent / 1000000;
          }
        })
        .slice(0, 4),
      commonstocksharesauthorized: data
        .map((date) => {
          if (date.commonstocksharesauthorized === undefined) {
            return (date.commonstocksharesauthorized = "-");
          } else {
            return date.commonstocksharesauthorized / 1000000;
          }
        })
        .slice(0, 4),
      cashandcashequivalentsatcarryingvalue: data
        .map((date) => {
          if (date.cashandcashequivalentsatcarryingvalue === undefined) {
            return (date.cashandcashequivalentsatcarryingvalue = "-");
          } else {
            return date.cashandcashequivalentsatcarryingvalue / 1000000;
          }
        })
        .slice(0, 4),
      retainedearningsaccumulateddeficit: data
        .map((date) => {
          if (date.retainedearningsaccumulateddeficit === undefined) {
            return (date.retainedearningsaccumulateddeficit = "-");
          } else {
            return date.retainedearningsaccumulateddeficit / 1000000;
          }
        })
        .slice(0, 4),
      liabilitiesnoncurrent: data
        .map((date) => {
          if (date.liabilitiesnoncurrent === undefined) {
            return (date.liabilitiesnoncurrent = "-");
          } else {
            return date.liabilitiesnoncurrent / 1000000;
          }
        })
        .slice(0, 4),
      propertyplantandequipmentnet: data
        .map((date) => {
          if (date.propertyplantandequipmentnet === undefined) {
            return (date.propertyplantandequipmentnet = "-");
          } else {
            return date.propertyplantandequipmentnet / 1000000;
          }
        })
        .slice(0, 4),
      commonstocksincludingadditionalpaidincapital: data
        .map((date) => {
          if (date.commonstocksincludingadditionalpaidincapital === undefined) {
            return (date.commonstocksincludingadditionalpaidincapital = "-");
          } else {
            return date.commonstocksincludingadditionalpaidincapital / 1000000;
          }
        })
        .slice(0, 4),
      commercialpaper: data
        .map((date) => {
          if (date.commercialpaper === undefined) {
            return (date.commercialpaper = "-");
          } else {
            return date.commercialpaper / 1000000;
          }
        })
        .slice(0, 4),
      longtermdebtcurrent: data
        .map((date) => {
          if (date.longtermdebtcurrent === undefined) {
            return (date.longtermdebtcurrent = "-");
          } else {
            return date.longtermdebtcurrent / 1000000;
          }
        })
        .slice(0, 4),
      commonstocksharesoutstanding: data
        .map((date) => {
          if (date.commonstocksharesoutstanding === undefined) {
            return (date.commonstocksharesoutstanding = "-");
          } else {
            return date.commonstocksharesoutstanding / 1000000;
          }
        })
        .slice(0, 4),
      otherliabilitiesnoncurrent: data
        .map((date) => {
          if (date.otherliabilitiesnoncurrent === undefined) {
            return (date.otherliabilitiesnoncurrent = "-");
          } else {
            return date.otherliabilitiesnoncurrent / 1000000;
          }
        })
        .slice(0, 4),
      marketablesecuritiescurrent: data
        .map((date) => {
          if (date.marketablesecuritiescurrent === undefined) {
            return (date.marketablesecuritiescurrent = "-");
          } else {
            return date.marketablesecuritiescurrent / 1000000;
          }
        })
        .slice(0, 4),
      otherliabilitiescurrent: data
        .map((date) => {
          if (date.otherliabilitiescurrent === undefined) {
            return (date.otherliabilitiescurrent = "-");
          } else {
            return date.otherliabilitiescurrent / 1000000;
          }
        })
        .slice(0, 4),
      assetscurrent: data
        .map((date) => {
          if (date.assetscurrent === undefined) {
            return (date.assetscurrent = "-");
          } else {
            return date.assetscurrent / 1000000;
          }
        })
        .slice(0, 4),
      longtermdebtnoncurrent: data
        .map((date) => {
          if (date.longtermdebtnoncurren === undefined) {
            return (date.longtermdebtnoncurren = "-");
          } else {
            return date.longtermdebtnoncurren / 1000000;
          }
        })
        .slice(0, 4),
      contractwithcustomerliabilitycurrent: data
        .map((date) => {
          if (date.contractwithcustomerliabilitycurrent === undefined) {
            return (date.contractwithcustomerliabilitycurrent = "-");
          } else {
            return date.contractwithcustomerliabilitycurrent / 1000000;
          }
        })
        .slice(0, 4),
      nontradereceivablescurrent: data
        .map((date) => {
          if (date.nontradereceivablescurrent === undefined) {
            return (date.nontradereceivablescurrent = "-");
          } else {
            return date.nontradereceivablescurrent / 1000000;
          }
        })
        .slice(0, 4),
      commonstocksharesissued: data
        .map((date) => {
          if (date.commonstocksharesissued === undefined) {
            return (date.commonstocksharesissued = "-");
          } else {
            return date.commonstocksharesissued / 1000000;
          }
        })
        .slice(0, 4),
      stockholdersequity: data
        .map((date) => {
          if (date.stockholdersequity === undefined) {
            return (date.stockholdersequity = "-");
          } else {
            return date.stockholdersequity / 1000000;
          }
        })
        .slice(0, 4),
      accountsreceivablenetcurrent: data
        .map((date) => {
          if (date.accountsreceivablenetcurrent === undefined) {
            return (date.accountsreceivablenetcurrent = "-");
          } else {
            return date.accountsreceivablenetcurrent / 1000000;
          }
        })
        .slice(0, 4),
      accountspayablecurrent: data
        .map((date) => {
          if (date.accountspayablecurrent === undefined) {
            return (date.accountspayablecurrent = "-");
          } else {
            return date.accountspayablecurrent / 1000000;
          }
        })
        .slice(0, 4),
      assets: data
        .map((date) => {
          if (date.assets === undefined) {
            return (date.assets = "-");
          } else {
            return date.assets / 1000000;
          }
        })
        .slice(0, 4),
      assetsnoncurrent: data
        .map((date) => {
          if (date.assetsnoncurrent === undefined) {
            return (date.assetsnoncurrent = "-");
          } else {
            return date.assetsnoncurrent / 1000000;
          }
        })
        .slice(0, 4),
      otherassetscurrent: data
        .map((date) => {
          if (date.otherassetscurrent === undefined) {
            return (date.otherassetscurrent = "-");
          } else {
            return date.otherassetscurrent / 1000000;
          }
        })
        .slice(0, 4),
      otherassetsnoncurrent: data
        .map((date) => {
          if (date.otherassetsnoncurrent === undefined) {
            return (date.otherassetsnoncurrent = "-");
          } else {
            return date.otherassetsnoncurrent / 1000000;
          }
        })
        .slice(0, 4),
      inventorynet: data
        .map((date) => {
          if (date.inventorynet === undefined) {
            return (date.inventorynet = "-");
          } else {
            return date.inventorynet / 1000000;
          }
        })
        .slice(0, 4),
      marketablesecuritiesnoncurrent: data
        .map((date) => {
          if (date.marketablesecuritiesnoncurrent === undefined) {
            return (date.marketablesecuritiesnoncurrent = "-");
          } else {
            return date.marketablesecuritiesnoncurrent / 1000000;
          }
        })
        .slice(0, 4),
      accumulatedothercomprehensiveincomelossnetoftax: data
        .map((date) => {
          if (
            date.accumulatedothercomprehensiveincomelossnetoftax === undefined
          ) {
            return (date.accumulatedothercomprehensiveincomelossnetoftax = "-");
          } else {
            return (
              date.accumulatedothercomprehensiveincomelossnetoftax / 1000000
            );
          }
        })
        .slice(0, 4),
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
