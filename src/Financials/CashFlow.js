import React, { useState, useEffect, useContext } from "react";
import { Context } from "../Context/Context";
import { financialmodelingprepApikey } from "../apikey/apikey";

export const CashFlow = () => {
  console.log(separator(100));
  function separator(numb) {
    let str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  const [context, setContext] = useContext(Context);
  const [dataInfo, setDataInfo] = useState({
    date: ["", "", "", ""],
    symbol: ["", "", "", ""],
    period: ["", "", "", ""],
    costofgoodsandservicessold: ["", "", "", ""],
    netincomeloss: ["", "", "", ""],
    researchanddevelopmentexpense: ["", "", "", ""],
    grossprofit: ["", "", "", ""],
    othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax:
      ["", "", "", ""],
    othercomprehensiveincomelossderivativeinstrumentgainlossbeforereclassificationaftertax:
      ["", "", "", ""],
    othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax:
      ["", "", "", ""],
    weightedaveragenumberofdilutedsharesoutstanding: ["", "", "", ""],
    weightedaveragenumberofsharesoutstandingbasic: ["", "", "", ""],
    operatingincomeloss: ["", "", "", ""],
    nonoperatingincomeexpense: ["", "", "", ""],
    incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest:
      ["", "", "", ""],
    othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax: [
      "",
      "",
      "",
      "",
    ],
    earningspersharebasic: ["", "", "", ""],
    incometaxexpensebenefit: ["", "", "", ""],
    othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax:
      ["", "", "", ""],
    revenuefromcontractwithcustomerexcludingassessedtax: ["", "", "", ""],
    earningspersharediluted: ["", "", "", ""],
    operatingexpenses: ["", "", "", ""],
    othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax:
      ["", "", "", ""],
    sellinggeneralandadministrativeexpense: ["", "", "", ""],
    othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax:
      ["", "", "", ""],
    othercomprehensiveincomelossnetoftaxportionattributabletoparent: [
      "",
      "",
      "",
      "",
    ],
    comprehensiveincomenetoftax: ["", "", "", ""],
  });
  async function fetchCashFlow() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/income-statement-as-reported/${context}?limit=10&apikey=${financialmodelingprepApikey}`
    );
    const data = await res.json();
    setDataInfo({
      date: data
        .map((date) => {
          return date.date;
        })
        .slice(0, 4),
      symbol: "",
      period: "",
      costofgoodsandservicessold: data
        .map((date) => {
          if (date.costofgoodsandservicessold === undefined) {
            return (date.costofgoodsandservicessold = "-");
          } else {
            return date.costofgoodsandservicessold / 1000000;
          }
        })
        .slice(0, 4),
      netincomeloss: data
        .map((date) => {
          if (date.netincomeloss === undefined) {
            return (date.netincomeloss = "-");
          } else {
            return date.netincomeloss / 1000000;
          }
        })
        .slice(0, 4),
      researchanddevelopmentexpense: data
        .map((date) => {
          if (date.researchanddevelopmentexpense === undefined) {
            return (date.researchanddevelopmentexpenses = "-");
          } else {
            return date.researchanddevelopmentexpense / 1000000;
          }
        })
        .slice(0, 4),
      grossprofit: data
        .map((date) => {
          if (date.grossprofit === undefined) {
            return (date.grossprofit = "-");
          } else {
            return date.grossprofit / 1000000;
          }
        })
        .slice(0, 4),
      othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax:
        data
          .map((date) => {
            if (
              date.othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax ===
              undefined
            ) {
              return (date.othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax =
                "-");
            } else {
              return (
                date.othercomprehensiveincomelossreclassificationadjustmentfromaociforsaleofsecuritiesnetoftax /
                1000000
              );
            }
          })
          .slice(0, 4),
      othercomprehensiveincomelossderivativeinstrumentgainlossbeforereclassificationaftertax:
        data.map((date) => {
          if (
            date.othercomprehensiveincomelossderivativeinstrumentgainlossbeforereclassificationaftertax ===
            undefined
          ) {
            return (date.othercomprehensiveincomelossderivativeinstrumentgainlossbeforereclassificationaftertax =
              "-");
          } else {
            return (
              date.othercomprehensiveincomelossderivativeinstrumentgainlossbeforereclassificationaftertax /
              1000000
            );
          }
        }),
      othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax:
        data
          .map((date) => {
            if (
              date.othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax ===
              undefined
            ) {
              return (date.othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax =
                "-");
            } else {
              return (
                date.othercomprehensiveincomelossforeigncurrencytransactionandtranslationadjustmentnetoftax /
                1000000
              );
            }
          })
          .slice(0, 4),
      weightedaveragenumberofdilutedsharesoutstanding: data
        .map((date) => {
          if (
            date.weightedaveragenumberofdilutedsharesoutstanding === undefined
          ) {
            return (date.weightedaveragenumberofdilutedsharesoutstanding = "-");
          } else {
            return (
              date.weightedaveragenumberofdilutedsharesoutstanding / 1000000
            );
          }
        })
        .slice(0, 4),
      weightedaveragenumberofsharesoutstandingbasic: data
        .map((date) => {
          if (
            date.weightedaveragenumberofsharesoutstandingbasic === undefined
          ) {
            return (date.weightedaveragenumberofsharesoutstandingbasic = "-");
          } else {
            return date.weightedaveragenumberofsharesoutstandingbasic / 1000000;
          }
        })
        .slice(0, 4),
      operatingincomeloss: data
        .map((date) => {
          if (date.operatingincomeloss === undefined) {
            return (date.operatingincomeloss = "-");
          } else {
            return date.operatingincomeloss / 1000000;
          }
        })
        .slice(0, 4),
      nonoperatingincomeexpense: data
        .map((date) => {
          if (date.nonoperatingincomeexpense === undefined) {
            return (date.nonoperatingincomeexpense = "-");
          } else {
            return date.nonoperatingincomeexpense / 1000000;
          }
        })
        .slice(0, 4),
      incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest:
        data
          .map((date) => {
            if (
              date.incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest ===
              undefined
            ) {
              return (date.incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest =
                "-");
            } else {
              return (
                date.incomelossfromcontinuingoperationsbeforeincometaxesextraordinaryitemsnoncontrollinginterest /
                1000000
              );
            }
          })
          .slice(0, 4),
      othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax:
        data
          .map((date) => {
            if (
              date.othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax ===
              undefined
            ) {
              return (date.othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax =
                "-");
            } else {
              return (
                date.othercomprehensiveincomelossavailableforsalesecuritiesadjustmentnetoftax /
                1000000
              );
            }
          })
          .slice(0, 4),
      earningspersharebasic: data
        .map((date) => {
          if (date.earningspersharebasic === undefined) {
            return (date.earningspersharebasic = "-");
          } else {
            return date.earningspersharebasic;
          }
        })
        .slice(0, 4),
      incometaxexpensebenefit: data
        .map((date) => {
          if (date.incometaxexpensebenefit === undefined) {
            return (date.incometaxexpensebenefit = "-");
          } else {
            return date.incometaxexpensebenefit / 1000000;
          }
        })
        .slice(0, 4),
      othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax:
        data
          .map((date) => {
            if (
              date.othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax ===
              undefined
            ) {
              return (date.othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax =
                "-");
            } else {
              return (
                date.othercomprehensiveincomeunrealizedholdinggainlossonsecuritiesarisingduringperiodnetoftax /
                1000000
              );
            }
          })
          .slice(0, 4),
      revenuefromcontractwithcustomerexcludingassessedtax: data
        .map((date) => {
          if (
            date.revenuefromcontractwithcustomerexcludingassessedtax ===
            undefined
          ) {
            return (date.revenuefromcontractwithcustomerexcludingassessedtax =
              "-");
          } else {
            return (
              date.revenuefromcontractwithcustomerexcludingassessedtax / 1000000
            );
          }
        })
        .slice(0, 4),
      earningspersharediluted: data
        .map((date) => {
          if (date.earningspersharediluted === undefined) {
            return (date.earningspersharediluted = "-");
          } else {
            return date.earningspersharediluted;
          }
        })
        .slice(0, 4),
      operatingexpenses: data
        .map((date) => {
          if (date.operatingexpenses === undefined) {
            return (date.operatingexpenses = "-");
          } else {
            return date.operatingexpenses / 1000000;
          }
        })
        .slice(0, 4),
      othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax:
        data
          .map((date) => {
            if (
              date.othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax ===
              undefined
            ) {
              return (date.othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax =
                "-");
            } else {
              return (
                date.othercomprehensiveincomelossderivativeinstrumentgainlossafterreclassificationandtax /
                1000000
              );
            }
          })
          .slice(0, 4),
      sellinggeneralandadministrativeexpense: data
        .map((date) => {
          if (date.sellinggeneralandadministrativeexpense === undefined) {
            return (date.sellinggeneralandadministrativeexpense = "-");
          } else {
            return date.sellinggeneralandadministrativeexpense / 1000000;
          }
        })
        .slice(0, 4),
      othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax:
        data
          .map((date) => {
            if (
              date.othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax ===
              undefined
            ) {
              return (date.othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax =
                "-");
            } else {
              return (
                date.othercomprehensiveincomelossderivativeinstrumentgainlossreclassificationaftertax /
                1000000
              );
            }
          })
          .slice(0, 4),
      othercomprehensiveincomelossnetoftaxportionattributabletoparent: data
        .map((date) => {
          if (
            date.othercomprehensiveincomelossnetoftaxportionattributabletoparent ===
            undefined
          ) {
            return (date.othercomprehensiveincomelossnetoftaxportionattributabletoparent =
              "-");
          } else {
            return (
              date.othercomprehensiveincomelossnetoftaxportionattributabletoparent /
              1000000
            );
          }
        })
        .slice(0, 4),
      comprehensiveincomenetoftax: data
        .map((date) => {
          if (date.comprehensiveincomenetoftax === undefined) {
            return (date.comprehensiveincomenetoftax = "-");
          } else {
            return date.comprehensiveincomenetoftax / 1000000;
          }
        })
        .slice(0, 4),
    });
    console.log(dataInfo);
  }
  useEffect(() => {
    fetchCashFlow();
  }, [context]);
  console.log(
    dataInfo.date,
    dataInfo.othercomprehensiveincomelossnetoftaxportionattributabletoparent
  );
  //   const Arr = ["2020-5", "2020-6", "2020-5", "2020-5"];
  return (
    <div>
      <h1> CashFlow Statment </h1>
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
