require 'capybara_support'

RSpec.describe "Checkout one-time payments", type: :system do
  example "With a valid card, the payment should be completed successfully" do
    visit server_url('/')

    click_on '+'
    click_on 'Buy'

    fill_in 'email', with: 'test@example.com'
    click_on 'Pay with card'
    fill_in 'cardNumber', with: '4242424242424242'
    fill_in 'cardExpiry', with: '12 / 33'
    fill_in 'CVC', with: '123'
    fill_in 'billingName', with: 'James McGill'
    select 'United States', from: 'billingCountry'
    fill_in 'billingPostalCode', with: '10000'

    click_on 'Pay €20.00'

    expect(page).to have_content 'Your payment succeeded'
    expect(page).to have_content '"amount_total": 2000'
  end

  example "Cancel a payment" do
    visit server_url('/')

    click_on 'Buy'
    click_on 'Previous page'

    expect(page).to have_content 'Your payment was canceled'
  end
end
