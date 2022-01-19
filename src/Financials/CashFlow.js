import React, { useState, useEffect, useContext } from "react";
import { financialmodelingprepApikey } from "../apikey/apikey";
import { Context } from "../Context/Context";
export const CashFlow = () => {
  const [context, setContext] = useContext(Context);
  const [dataInfo, setDataInfo] = useState({
    date: [],
    netIncome: [],
    netincomeloss: [],
    depreciationAndAmortization: [],
    deferredIncomeTax: [],
    stockBasedCompensation: [],
    changeInWorkingCapital: [],
    accountsReceivables: [],
    inventory: [],
    accountsPayables: [],
    otherWorkingCapital: [],
    otherNonCashItems: [],
    netCashProvidedByOperatingActivities: [],
    investmentsInPropertyPlantAndEquipment: [],
    acquisitionsNet: [],
    purchasesOfInvestments: [],
    salesMaturitiesOfInvestments: [],
    otherInvestingActivites: [],
    netCashUsedForInvestingActivites: [],
    debtRepayment: [],
    commonStockIssued: [],
    commonStockRepurchased: [],
    dividendsPaid: [],
    otherFinancingActivites: [],
    netCashUsedProvidedByFinancingActivities: [],
    effectOfForexChangesOnCash: [],
    netChangeInCash: [],
    cashAtEndOfPeriod: [],
    cashAtBeginningOfPeriod: [],
    operatingCashFlow: [],
    capitalExpenditure: [],
    freeCashFlow: [],
  });

  async function fetchIncomeStatement() {
    const res = await fetch(
      `https://financialmodelingprep.com/api/v3/cash-flow-statement/${context}?limit=120&apikey=${financialmodelingprepApikey}`
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
      netIncome: data
        .map((date) => {
          if (date.netIncome === undefined) {
            return (date.netIncome = "-");
          } else {
            return date.netIncome / 1000000;
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
      depreciationAndAmortization: data
        .map((date) => {
          if (date.depreciationAndAmortization === undefined) {
            return (date.depreciationAndAmortization = "-");
          } else {
            return date.depreciationAndAmortization / 1000000;
          }
        })
        .slice(0, 4),
      deferredIncomeTax: data
        .map((date) => {
          if (date.deferredIncomeTax === undefined) {
            return (date.deferredIncomeTax = "-");
          } else {
            return date.deferredIncomeTax / 1000000;
          }
        })
        .slice(0, 4),
      stockBasedCompensation: data
        .map((date) => {
          if (date.stockBasedCompensation === undefined) {
            return (date.stockBasedCompensation = "-");
          } else {
            return date.stockBasedCompensation / 1000000;
          }
        })
        .slice(0, 4),
      changeInWorkingCapital: data
        .map((date) => {
          if (date.changeInWorkingCapital === undefined) {
            return (date.changeInWorkingCapital = "-");
          } else {
            return date.changeInWorkingCapital / 1000000;
          }
        })
        .slice(0, 4),
      accountsReceivables: data
        .map((date) => {
          if (date.accountsReceivables === undefined) {
            return (date.accountsReceivables = "-");
          } else {
            return date.accountsReceivables / 1000000;
          }
        })
        .slice(0, 4),
      inventory: data
        .map((date) => {
          if (date.inventory === undefined) {
            return (date.inventory = "-");
          } else {
            return date.inventory / 1000000;
          }
        })
        .slice(0, 4),
      accountsPayables: data
        .map((date) => {
          if (date.accountsPayables === undefined) {
            return (date.accountsPayables = "-");
          } else {
            return date.accountsPayables / 1000000;
          }
        })
        .slice(0, 4),
      otherWorkingCapital: data
        .map((date) => {
          if (date.otherWorkingCapital === undefined) {
            return (date.otherWorkingCapital = "-");
          } else {
            return date.otherWorkingCapital / 1000000;
          }
        })
        .slice(0, 4),
      otherNonCashItems: data
        .map((date) => {
          if (date.otherNonCashItems === undefined) {
            return (date.otherNonCashItems = "-");
          } else {
            return date.otherNonCashItems / 1000000;
          }
        })
        .slice(0, 4),
      netCashProvidedByOperatingActivities: data
        .map((date) => {
          if (date.netCashProvidedByOperatingActivities === undefined) {
            return (date.netCashProvidedByOperatingActivities = "-");
          } else {
            return date.netCashProvidedByOperatingActivities / 1000000;
          }
        })
        .slice(0, 4),
      investmentsInPropertyPlantAndEquipment: data
        .map((date) => {
          if (date.investmentsInPropertyPlantAndEquipment === undefined) {
            return (date.investmentsInPropertyPlantAndEquipment = "-");
          } else {
            return date.investmentsInPropertyPlantAndEquipment / 1000000;
          }
        })
        .slice(0, 4),
      acquisitionsNet: data
        .map((date) => {
          if (date.acquisitionsNet === undefined) {
            return (date.acquisitionsNet = "-");
          } else {
            return date.acquisitionsNet / 1000000;
          }
        })
        .slice(0, 4),
      purchasesOfInvestments: data
        .map((date) => {
          if (date.purchasesOfInvestments === undefined) {
            return (date.purchasesOfInvestments = "-");
          } else {
            return date.purchasesOfInvestments / 1000000;
          }
        })
        .slice(0, 4),
      salesMaturitiesOfInvestments: data
        .map((date) => {
          if (date.salesMaturitiesOfInvestments === undefined) {
            return (date.salesMaturitiesOfInvestments = "-");
          } else {
            return date.salesMaturitiesOfInvestments / 1000000;
          }
        })
        .slice(0, 4),
      otherInvestingActivites: data
        .map((date) => {
          if (date.otherInvestingActivites === undefined) {
            return (date.otherInvestingActivites = "-");
          } else {
            return date.otherInvestingActivites / 1000000;
          }
        })
        .slice(0, 4),
      netCashUsedForInvestingActivites: data
        .map((date) => {
          if (date.netCashUsedForInvestingActivites === undefined) {
            return (date.netCashUsedForInvestingActivites = "-");
          } else {
            return date.netCashUsedForInvestingActivites / 1000000;
          }
        })
        .slice(0, 4),
      debtRepayment: data
        .map((date) => {
          if (date.debtRepayment === undefined) {
            return (date.debtRepayment = "-");
          } else {
            return date.debtRepayment / 1000000;
          }
        })
        .slice(0, 4),
      commonStockIssued: data
        .map((date) => {
          if (date.commonStockIssued === undefined) {
            return (date.commonStockIssued = "-");
          } else {
            return date.commonStockIssued / 1000000;
          }
        })
        .slice(0, 4),
      commonStockRepurchased: data
        .map((date) => {
          if (date.commonStockRepurchased === undefined) {
            return (date.commonStockRepurchased = "-");
          } else {
            return date.commonStockRepurchased / 1000000;
          }
        })
        .slice(0, 4),
      dividendsPaid: data
        .map((date) => {
          if (date.dividendsPaid === undefined) {
            return (date.dividendsPaid = "-");
          } else {
            return date.dividendsPaid / 1000000;
          }
        })
        .slice(0, 4),
      otherFinancingActivites: data
        .map((date) => {
          if (date.otherFinancingActivites === undefined) {
            return (date.otherFinancingActivites = "-");
          } else {
            return date.otherFinancingActivites / 1000000;
          }
        })
        .slice(0, 4),
      netCashUsedProvidedByFinancingActivities: data
        .map((date) => {
          if (date.netCashUsedProvidedByFinancingActivities === undefined) {
            return (date.netCashUsedProvidedByFinancingActivities = "-");
          } else {
            return date.netCashUsedProvidedByFinancingActivities / 1000000;
          }
        })
        .slice(0, 4),
      effectOfForexChangesOnCash: data
        .map((date) => {
          if (date.effectOfForexChangesOnCash === undefined) {
            return (date.effectOfForexChangesOnCash = "-");
          } else {
            return date.effectOfForexChangesOnCash / 1000000;
          }
        })
        .slice(0, 4),
      netChangeInCash: data
        .map((date) => {
          if (date.netChangeInCash === undefined) {
            return (date.netChangeInCash = "-");
          } else {
            return date.netChangeInCash / 1000000;
          }
        })
        .slice(0, 4),
      cashAtEndOfPeriod: data
        .map((date) => {
          if (date.cashAtEndOfPeriod === undefined) {
            return (date.cashAtEndOfPeriod = "-");
          } else {
            return date.cashAtEndOfPeriod / 1000000;
          }
        })
        .slice(0, 4),
      cashAtBeginningOfPeriod: data
        .map((date) => {
          if (date.cashAtBeginningOfPeriod === undefined) {
            return (date.cashAtBeginningOfPeriod = "-");
          } else {
            return date.cashAtBeginningOfPeriod / 1000000;
          }
        })
        .slice(0, 4),
      operatingCashFlow: data
        .map((date) => {
          if (date.operatingCashFlow === undefined) {
            return (date.operatingCashFlow = "-");
          } else {
            return date.operatingCashFlow / 1000000;
          }
        })
        .slice(0, 4),
      capitalExpenditure: data
        .map((date) => {
          if (date.capitalExpenditure === undefined) {
            return (date.capitalExpenditure = "-");
          } else {
            return date.capitalExpenditure / 1000000;
          }
        })
        .slice(0, 4),
      freeCashFlow: data
        .map((date) => {
          if (date.freeCashFlow === undefined) {
            return (date.freeCashFlow = "-");
          } else {
            return date.freeCashFlow / 1000000;
          }
        })
        .slice(0, 4),
    });
  }
  useEffect(() => {
    fetchIncomeStatement();
  }, [context]);
  return (
    <div>
      <h1> Income Statement</h1>
      <h6> Numbers to Millions</h6>
      <table>
        <tbody>
          <tr>
            <th>About</th>
            {dataInfo.date.map((item) => (
              <th>{item}</th>
            ))}
          </tr>
          <tr>
            <td> Net Income</td>
            {dataInfo.netIncome.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Depreciation and Amortization</td>
            {dataInfo.depreciationAndAmortization.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Deferred Income Tax</td>
            {dataInfo.deferredIncomeTax.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Stock Based Compensation</td>
            {dataInfo.stockBasedCompensation.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Change In Working Capital</td>
            {dataInfo.changeInWorkingCapital.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Accounts Receivables</td>
            {dataInfo.accountsReceivables.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Inventory</td>
            {dataInfo.inventory.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Accounts Payables</td>
            {dataInfo.accountsPayables.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Working Capital</td>
            {dataInfo.otherWorkingCapital.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Non-Cash Items</td>
            {dataInfo.otherNonCashItems.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Cash Provided By Operating Activities</td>
            {dataInfo.netCashProvidedByOperatingActivities.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Investments In Property Plant And Equipment</td>
            {dataInfo.investmentsInPropertyPlantAndEquipment.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Acquisitions Net</td>
            {dataInfo.acquisitionsNet.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Purchases Of Investments</td>
            {dataInfo.purchasesOfInvestments.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Sales Maturities Of Investments</td>
            {dataInfo.salesMaturitiesOfInvestments.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Investing Activites</td>
            {dataInfo.otherInvestingActivites.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Cash Used For Investing Activites</td>
            {dataInfo.netCashUsedForInvestingActivites.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Debt Repayment</td>
            {dataInfo.debtRepayment.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Common Stock Issued</td>
            {dataInfo.commonStockIssued.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Common Stock Repurchased</td>
            {dataInfo.commonStockRepurchased.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Dividends Paid</td>
            {dataInfo.dividendsPaid.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Financing Activites</td>
            {dataInfo.otherFinancingActivites.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Cash Used Provided By Financing Activities</td>
            {dataInfo.otherFinancingActivites.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Effect Of Forex Changes On Cash</td>
            {dataInfo.effectOfForexChangesOnCash.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Change In Cash</td>
            {dataInfo.netChangeInCash.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Cash At End Of Period</td>
            {dataInfo.cashAtEndOfPeriod.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Cash At Beginning Of Period</td>
            {dataInfo.cashAtBeginningOfPeriod.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Operating Cash Flow</td>
            {dataInfo.operatingCashFlow.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Capital Expenditure</td>
            {dataInfo.capitalExpenditure.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Free Cash Flow</td>
            {dataInfo.freeCashFlow.map((item) => (
              <td>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
