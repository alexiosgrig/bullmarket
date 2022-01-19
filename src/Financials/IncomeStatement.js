import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context/Context";
import { financialmodelingprepApikey } from "../apikey/apikey";
import { divider } from "./BalanceSheet";
import { checkNumbers } from "./BalanceSheet";

export const IncomeStatement = () => {
  const [context, setContext] = useContext(Context);
  const [dataInfo, setDataInfo] = useState({
    date: [],
    costofgoodsandservicessold: [],
    netincomeloss: [],
    researchanddevelopmentexpense: [],
    grossprofit: [],
    othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax:
      [],
    othercomprehensiveincomelossderivativeinstrumentgainlossbeforereclassificationaftertax:
      [],
    othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax:
      [],
    weightedaveragenumberofdilutedsharesoutstanding: [],
    weightedaveragenumberofsharesoutstandingbasic: [],
    operatingincomeloss: [],
    nonoperatingincomeexpense: [],
    incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest:
      [],
    othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax:
      [],
    earningspersharebasic: [],
    incometaxexpensebenefit: [],
    othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax:
      [],
    revenuefromcontractwithcustomerexcludingassessedtax: [],
    earningspersharediluted: [],
    operatingexpenses: [],
    othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax:
      [],
    sellinggeneralandadministrativeexpense: [],
    othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax:
      [],
    othercomprehensiveincomelossnetoftaxportionattributabletoparent: [],
    comprehensiveincomenetoftax: [],
  });

  async function fetchCashFlow() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/income-statement-as-reported/${context}?limit=10&apikey=${financialmodelingprepApikey}`
    );
    const data = await res.json();
    console.log(data.date);
    setDataInfo({
      date: data.map((element) => checkNumbers(element.date)).slice(0, 4),
      costofgoodsandservicessold: data
        .map((element) =>
          checkNumbers(element.costofgoodsandservicessold, divider)
        )
        .slice(0, 4),
      netincomeloss: data
        .map((element) => checkNumbers(element.netincomeloss, divider))
        .slice(0, 4),
      researchanddevelopmentexpense: data
        .map((element) =>
          checkNumbers(element.researchanddevelopmentexpense, divider)
        )
        .slice(0, 4),
      grossprofit: data
        .map((element) => checkNumbers(element.grossprofit, divider))
        .slice(0, 4),
      othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax:
        data
          .map((element) =>
            checkNumbers(
              element.othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax,
              divider
            )
          )
          .slice(0, 4),
      othercomprehensiveincomelossderivativeinstrumentgainlossbeforereclassificationaftertax:
        data
          .map((element) =>
            checkNumbers(
              element.othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax,
              divider
            )
          )
          .slice(0, 4),
      othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax:
        data
          .map((element) =>
            checkNumbers(
              element.othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax,
              divider
            )
          )
          .slice(0, 4),
      weightedaveragenumberofdilutedsharesoutstanding: data
        .map((element) =>
          checkNumbers(
            element.weightedaveragenumberofdilutedsharesoutstanding,
            divider
          )
        )
        .slice(0, 4),
      weightedaveragenumberofsharesoutstandingbasic: data
        .map((element) =>
          checkNumbers(
            element.weightedaveragenumberofsharesoutstandingbasic,
            divider
          )
        )
        .slice(0, 4),
      operatingincomeloss: data
        .map((element) => checkNumbers(element.operatingincomeloss, divider))
        .slice(0, 4),
      nonoperatingincomeexpense: data
        .map((element) =>
          checkNumbers(element.nonoperatingincomeexpense, divider)
        )
        .slice(0, 4),
      incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest:
        data
          .map((element) =>
            checkNumbers(
              element.incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest,
              divider
            )
          )
          .slice(0, 4),
      othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax:
        data
          .map((element) =>
            checkNumbers(
              element.othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax,
              divider
            )
          )
          .slice(0, 4),
      earningspersharebasic: data
        .map((element) => checkNumbers(element.earningspersharebasic))
        .slice(0, 4),
      incometaxexpensebenefit: data
        .map((element) =>
          checkNumbers(element.incometaxexpensebenefit, divider)
        )
        .slice(0, 4),
      othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax:
        data
          .map((element) =>
            checkNumbers(
              element.othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax,
              divider
            )
          )
          .slice(0, 4),
      revenuefromcontractwithcustomerexcludingassessedtax: data
        .map((element) =>
          checkNumbers(
            element.revenuefromcontractwithcustomerexcludingassessedtax,
            divider
          )
        )
        .slice(0, 4),
      earningspersharediluted: data
        .map((element) => checkNumbers(element.earningspersharediluted))
        .slice(0, 4),
      operatingexpenses: data
        .map((element) => checkNumbers(element.operatingexpenses, divider))
        .slice(0, 4),
      othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax:
        data
          .map((element) =>
            checkNumbers(
              element.othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax,
              divider
            )
          )
          .slice(0, 4),
      sellinggeneralandadministrativeexpense: data
        .map((element) =>
          checkNumbers(element.sellinggeneralandadministrativeexpense, divider)
        )
        .slice(0, 4),
      othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax:
        data
          .map((element) =>
            checkNumbers(
              element.othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax,
              divider
            )
          )
          .slice(0, 4),
      othercomprehensiveincomelossnetoftaxportionattributabletoparent: data
        .map((element) =>
          checkNumbers(
            element.othercomprehensiveincomelossnetoftaxportionattributabletoparent,
            divider
          )
        )
        .slice(0, 4),
      comprehensiveincomenetoftax: data
        .map((element) =>
          checkNumbers(element.comprehensiveincomenetoftax, divider)
        )
        .slice(0, 4),
    });
  }
  useEffect(() => {
    fetchCashFlow();
  }, [context]);
  console.log(
    dataInfo.date,
    dataInfo.othercomprehensiveincomelossnetoftaxportionattributabletoparent
  );
  return (
    <div>
      <h1> Income Statement </h1>
      <h6> Numbers to Millions</h6>
      <table id="simple-board">
        <tbody>
          <tr>
            <th>About</th>
            {dataInfo.date.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
          <tr>
            <td> Cost of goods and services sold</td>
            {dataInfo.costofgoodsandservicessold.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Income Loss</td>
            {dataInfo.netincomeloss.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Research And Development Expense</td>
            {dataInfo.researchanddevelopmentexpense.map((item) => (
              <td> {item === "" ? "N/A" : item}</td>
            ))}
          </tr>
          <tr>
            <td> Gross Profit </td>
            {dataInfo.grossprofit.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td>
              Other Comprehensive Income Loss Reclassification Adjustment From a
              OCI for Sale of securities net of tax
            </td>
            {dataInfo.othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax.map(
              (item) => (
                <td> {item === NaN ? "" : item}</td>
              )
            )}
          </tr>
          <tr>
            <td>
              Other Comprehensive Income Loss Derivative Instrument Gain Loss
              Before Reclassification After Tax
            </td>
            {dataInfo.othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax.map(
              (item) => (
                <td> {item == NaN ? "" : item}</td>
              )
            )}
          </tr>
          <tr>
            <td>
              Other Comprehensive Income Loss Foreign Currency Transaction And
              Translation Adjustment Net of Tax
            </td>
            {dataInfo.othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td>Weighted Average Number Of Diluted Shares Outstanding</td>
            {dataInfo.weightedaveragenumberofdilutedsharesoutstanding.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td>Weighted Average Number Of Shares Outstanding Basic</td>
            {dataInfo.weightedaveragenumberofsharesoutstandingbasic.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td>Operating Income Loss</td>
            {dataInfo.operatingincomeloss.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td>Non-Operating Income Expense</td>
            {dataInfo.nonoperatingincomeexpense.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td>
              Income Loss From Continuing Operations Before Income Taxes
              Extraordinary Items Non-Controlling Interest
            </td>
            {dataInfo.incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td>
              Other Comprehensive Income Loss Available For Sale Securities
              Adjustment Net of Tax
            </td>
            {dataInfo.othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td>Earnings per Share Basic</td>
            {dataInfo.earningspersharebasic.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td>Income Tax Expense Benefit</td>
            {dataInfo.incometaxexpensebenefit.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td>
              Other Comprehensive Income Unrealized Holding Gain Loss On
              Securities a Rising During Period Net of Tax
            </td>
            {dataInfo.othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td>Revenue From Contract With Customer Excluding Assessed Tax</td>
            {dataInfo.revenuefromcontractwithcustomerexcludingassessedtax.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td>Earnings per Share Diluted</td>
            {dataInfo.earningspersharediluted.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td>Operating Expenses</td>
            {dataInfo.operatingexpenses.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td>
              Other Comprehensive Income Loss Derivative Instrument Gain Loss
              After Reclassification And Tax
            </td>
            {dataInfo.othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td>Selling General And Admin Is Rative Expense</td>
            {dataInfo.sellinggeneralandadministrativeexpense.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td>
              Other Comprehensive Income Loss Derivative Instrument Gain Loss
              Reclassification After Tax
            </td>
            {dataInfo.othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td>
              Other Comprehensive Income Loss Net of Tax Portion Attributable to
              Parent
            </td>
            {dataInfo.othercomprehensiveincomelossnetoftaxportionattributabletoparent.map(
              (item) => (
                <td>{item}</td>
              )
            )}
          </tr>
          <tr>
            <td>Comprehensive Income Net of Tax</td>
            {dataInfo.comprehensiveincomenetoftax.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
