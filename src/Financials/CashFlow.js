import React, { useState, useEffect, useContext } from "react";
import { financialmodelingprepApikey } from "../apikey/apikey";
import { Context } from "../Context/Context";
import { checkNumbers } from "./BalanceSheet";
import { divider } from "./BalanceSheet";
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
        .map((element) => checkNumbers(element.date))
        .slice(0, 4)
        .reverse(),
      netIncome: data
        .map((element) => checkNumbers(element.netIncome, divider))
        .slice(0, 4)
        .reverse(),
      netincomeloss: data
        .map((element) => checkNumbers(element.netincomeloss, divider))
        .slice(0, 4)
        .reverse(),
      depreciationAndAmortization: data
        .map((element) =>
          checkNumbers(element.depreciationAndAmortization, divider)
        )
        .slice(0, 4)
        .reverse(),
      deferredIncomeTax: data
        .map((element) => checkNumbers(element.deferredIncomeTax, divider))
        .slice(0, 4)
        .reverse(),
      stockBasedCompensation: data
        .map((element) => checkNumbers(element.stockBasedCompensation, divider))
        .slice(0, 4)
        .reverse(),
      changeInWorkingCapital: data
        .map((element) => checkNumbers(element.changeInWorkingCapital, divider))
        .slice(0, 4)
        .reverse(),
      accountsReceivables: data
        .map((element) => checkNumbers(element.accountsReceivables, divider))
        .slice(0, 4)
        .reverse(),
      inventory: data
        .map((element) => checkNumbers(element.inventory, divider))
        .slice(0, 4)
        .reverse(),
      accountsPayables: data
        .map((element) => checkNumbers(element.accountsPayables, divider))
        .slice(0, 4)
        .reverse(),
      otherWorkingCapital: data
        .map((element) => checkNumbers(element.otherWorkingCapital, divider))
        .slice(0, 4)
        .reverse(),
      otherNonCashItems: data
        .map((element) => checkNumbers(element.otherNonCashItems, divider))
        .slice(0, 4)
        .reverse(),
      netCashProvidedByOperatingActivities: data
        .map((element) =>
          checkNumbers(element.netCashProvidedByOperatingActivities, divider)
        )
        .slice(0, 4)
        .reverse(),
      investmentsInPropertyPlantAndEquipment: data
        .map((element) =>
          checkNumbers(element.investmentsInPropertyPlantAndEquipment, divider)
        )
        .slice(0, 4)
        .reverse(),
      acquisitionsNet: data
        .map((element) => checkNumbers(element.acquisitionsNet, divider))
        .slice(0, 4)
        .reverse(),
      purchasesOfInvestments: data
        .map((element) => checkNumbers(element.purchasesOfInvestments, divider))
        .slice(0, 4)
        .reverse(),
      salesMaturitiesOfInvestments: data
        .map((element) =>
          checkNumbers(element.salesMaturitiesOfInvestments, divider)
        )
        .slice(0, 4)
        .reverse(),
      otherInvestingActivites: data
        .map((element) =>
          checkNumbers(element.otherInvestingActivites, divider)
        )
        .slice(0, 4)
        .reverse(),
      netCashUsedForInvestingActivites: data
        .map((element) =>
          checkNumbers(element.netCashUsedForInvestingActivites, divider)
        )
        .slice(0, 4)
        .reverse(),
      debtRepayment: data
        .map((element) => checkNumbers(element.debtRepayment, divider))
        .slice(0, 4)
        .reverse(),
      commonStockIssued: data
        .map((element) => checkNumbers(element.commonStockIssued, divider))
        .slice(0, 4)
        .reverse(),
      commonStockRepurchased: data
        .map((element) => checkNumbers(element.commonStockRepurchased, divider))
        .slice(0, 4)
        .reverse(),
      dividendsPaid: data
        .map((element) => checkNumbers(element.dividendsPaid, divider))
        .slice(0, 4)
        .reverse(),
      otherFinancingActivites: data
        .map((element) =>
          checkNumbers(element.otherFinancingActivites, divider)
        )
        .slice(0, 4)
        .reverse(),
      netCashUsedProvidedByFinancingActivities: data
        .map((element) =>
          checkNumbers(
            element.netCashUsedProvidedByFinancingActivities,
            divider
          )
        )
        .slice(0, 4)
        .reverse(),
      effectOfForexChangesOnCash: data
        .map((element) =>
          checkNumbers(element.effectOfForexChangesOnCash, divider)
        )
        .slice(0, 4)
        .reverse(),
      netChangeInCash: data
        .map((element) => checkNumbers(element.netChangeInCash, divider))
        .slice(0, 4)
        .reverse(),
      cashAtEndOfPeriod: data
        .map((element) => checkNumbers(element.cashAtEndOfPeriod, divider))
        .slice(0, 4)
        .reverse(),
      cashAtBeginningOfPeriod: data
        .map((element) =>
          checkNumbers(element.cashAtBeginningOfPeriod, divider)
        )
        .slice(0, 4)
        .reverse(),
      operatingCashFlow: data
        .map((element) => checkNumbers(element.operatingCashFlow, divider))
        .slice(0, 4)
        .reverse(),
      capitalExpenditure: data
        .map((element) => checkNumbers(element.capitalExpenditure, divider))
        .slice(0, 4)
        .reverse(),
      freeCashFlow: data
        .map((element) => checkNumbers(element.freeCashFlow, divider))
        .slice(0, 4)
        .reverse(),
    });
  }
  useEffect(() => {
    fetchIncomeStatement();
  }, [context]);
  return (
    <div>
      <h1> Cash Flow</h1>
      <h6> Numbers to Millions</h6>
      <table>
        <tbody>
          <tr>
            <th>About</th>
            {dataInfo.date.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
          <tr>
            <td> Net Income</td>
            {dataInfo.netIncome.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Depreciation and Amortization</td>
            {dataInfo.depreciationAndAmortization.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Deferred Income Tax</td>
            {dataInfo.deferredIncomeTax.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Stock Based Compensation</td>
            {dataInfo.stockBasedCompensation.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Change In Working Capital</td>
            {dataInfo.changeInWorkingCapital.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Accounts Receivables</td>
            {dataInfo.accountsReceivables.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Inventory</td>
            {dataInfo.inventory.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Accounts Payables</td>
            {dataInfo.accountsPayables.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Working Capital</td>
            {dataInfo.otherWorkingCapital.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Non-Cash Items</td>
            {dataInfo.otherNonCashItems.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Cash Provided By Operating Activities</td>
            {dataInfo.netCashProvidedByOperatingActivities.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Investments In Property Plant And Equipment</td>
            {dataInfo.investmentsInPropertyPlantAndEquipment.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Acquisitions Net</td>
            {dataInfo.acquisitionsNet.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Purchases Of Investments</td>
            {dataInfo.purchasesOfInvestments.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Sales Maturities Of Investments</td>
            {dataInfo.salesMaturitiesOfInvestments.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Investing Activites</td>
            {dataInfo.otherInvestingActivites.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Cash Used For Investing Activites</td>
            {dataInfo.netCashUsedForInvestingActivites.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Debt Repayment</td>
            {dataInfo.debtRepayment.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Common Stock Issued</td>
            {dataInfo.commonStockIssued.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Common Stock Repurchased</td>
            {dataInfo.commonStockRepurchased.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Dividends Paid</td>
            {dataInfo.dividendsPaid.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Other Financing Activites</td>
            {dataInfo.otherFinancingActivites.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Cash Used Provided By Financing Activities</td>
            {dataInfo.otherFinancingActivites.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Effect Of Forex Changes On Cash</td>
            {dataInfo.effectOfForexChangesOnCash.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Net Change In Cash</td>
            {dataInfo.netChangeInCash.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Cash At End Of Period</td>
            {dataInfo.cashAtEndOfPeriod.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Cash At Beginning Of Period</td>
            {dataInfo.cashAtBeginningOfPeriod.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Operating Cash Flow</td>
            {dataInfo.operatingCashFlow.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Capital Expenditure</td>
            {dataInfo.capitalExpenditure.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
          <tr>
            <td> Free Cash Flow</td>
            {dataInfo.freeCashFlow.map((item) => (
              <td key={item}>{item}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
