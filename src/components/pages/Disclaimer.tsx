import React from 'react';
import { AlertTriangle, ArrowLeft } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back button */}
        <a
          href="/"
          className="
            inline-flex items-center gap-2 mb-8
            text-gray-600 hover:text-gray-900
            transition-colors duration-200
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Calculator
        </a>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-xl mb-6">
            <AlertTriangle className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Disclaimer</h1>
          <p className="mt-4 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">General Information</h2>
            <p className="text-gray-600">
              The Position Size Calculator is provided for informational and educational purposes only. 
              The information contained herein should not be construed as financial advice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">No Investment Advice</h2>
            <p className="text-gray-600">
              The calculator results and any other information provided through this website do not 
              constitute investment advice, financial advice, trading advice, or any other sort of advice. 
              You should not treat any of the website's content as such.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Risk Warning</h2>
            <p className="text-gray-600">
              Trading foreign exchange and futures carries a high level of risk and may not be suitable 
              for all investors. The high degree of leverage can work against you as well as for you. 
              Before deciding to trade foreign exchange or futures, you should carefully consider your 
              investment objectives, level of experience, and risk appetite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Accuracy of Information</h2>
            <p className="text-gray-600">
              While we strive to provide accurate calculations and information, we make no representations 
              or warranties of any kind, express or implied, about the completeness, accuracy, reliability, 
              suitability, or availability of the calculator or the information contained on the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Market Data</h2>
            <p className="text-gray-600">
              Exchange rates, pip values, and other market data used in calculations are approximations 
              and may differ from actual market conditions. Always verify current rates and values with 
              your broker before placing trades.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600">
              In no event will we be liable for any loss or damage including without limitation, indirect 
              or consequential loss or damage, or any loss or damage whatsoever arising from loss of data 
              or profits arising out of, or in connection with, the use of this calculator.
            </p>
          </section>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              By using the Position Size Calculator, you acknowledge that you have read, understood, and 
              agree to be bound by this disclaimer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}