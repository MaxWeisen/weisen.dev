---
title: Credit Based Enrollments
company: Revolution Prep
description:
  In support of our B2B partnership with Bright Horizons we transitioned
  Revolution Prep's enrollment system from an hourly-based model to a flexible
  credit system for certain Enrollments.
image: https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/credit-based-enrollments/credit-based-enrollment-overview.webp
url: "/projects/credit-based-enrollments"
tags: ["UX Design", "UI Design"]
date: "2025"
technologies: ["nuxt", "vue"]
---

## Overview

Revolution Prep has historically used "hours" as currency for users to consume
their products. In an effort to allow users to reserve more than just hourly
based products, we wanted to enable "credit" based enrollments. With this change
users have the option to enroll in our Small Group Course offerings in addition
to one on one tutoring products.

:product-image{src="https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/credit-based-enrollments/credit-based-enrollment-overview.webp"
alt="Overview of a user with a credit based enrollment" width="100%"}

## The Bright Horizons Partnership

Most of the demand for credit-based enrollments came out of Revolution Prep's
partnership with Bright Horizons, the largest provider of employer-sponsored
childcare in the United States. Revolution Prep has worked with Bright Horizons
since 2012, and in 2024 we became one of three tutoring providers under their
Back-Up Care program, which covers roughly eight million people across fifteen
hundred employer clients. Through Back-Up Care, eligible employees can redeem a
block of tutoring as a benefit.

The original integration only supported one-on-one tutoring, so a family's hours
could only be spent one way. Moving to a credit-based model let us broaden what
those benefits could unlock, the same reservation could now be applied to Small
Group Courses. The result was a more flexible offering for families, and a
self-service experience that gets a Back-Up Care family from redemption to their
first session in under seventy-two hours.

## The Challenge

- Using hours is deeply engrained in our existing architecture.
- Handling users who have both "hour" and "credit" based enrollments.
- Communicating what users can redeem credits for.

## Motivation

- We want to provide our users with more options.
- Enabling users to be able to schedule Small Group Courses with their credits
  allows them to get more tutoring help with less cost.

## Goals

- Get more users enrolled in Small Group Courses.
- Have less friction when reserving sessions or scheduling with a tutor
  individually.

### Schedule Sessions Page

The Schedule Sessions page is the first place a credit-based family lands after
redeeming their benefits, so it had to make sense at a glance whether you came
in with hours, credits, or a mix of both. We reworked the header to lead with a
single "remaining" summary and conditionally rendered an unscheduled-hours chip
for Back-Up Care families, so users can see what they have left before picking
how to spend it. The same page now drives both the one-on-one tutoring booking
flow and the new Small Group Course path, which kept the entry point familiar
for returning families while opening up the new offering without an extra
detour.

:product-image{src="https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/credit-based-enrollments/schedule-session-page.png"
alt="Schedule Sessions Page for a user with a credit based enrollment" width="100%"}

## Credit Calculator

The hardest part of moving to credits was helping families and advisors
visualize what a credit was actually worth. A credit isn't a session or an hour,
it's a unit that converts differently depending on what you redeem it for, so we
built a Credit Calculator that does the math for you. Pick how many credits you
have, and it shows you every valid combination, whether that's a 12-hour Small
Group Course, a stack of one-on-one tutoring hours, or any mix that adds up.
Advisors picked this up almost immediately on sales calls, and it cut down the
back-and-forth families used to have just to understand their own benefit.

:product-image{src="https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/credit-based-enrollments/02-credit-based-enrollments-credit-calculator.webp"
alt="Credit Calculator showing what a family can redeem with their available
credits" width="100%"}

## Small Group Course Explorer

The Small Group Course Explorer is where credit-based families browse and book
into a live course. We pull from the same course catalog that powers the
retail-facing website, so families see real upcoming sections with real seat
counts, but the experience is tuned for credit redemption, each card shows the
credits required up front, surfaces a "seats remaining" alert when a course is
filling up, and only lists courses with at least one retail student already
enrolled so we don't risk seating a Back-Up Care family into a section that
might not run. Picking a course leads into a focused confirmation step where the
family can review the schedule, see exactly how many credits they're spending,
and lock in their seat in a single tap.

:product-image{src="https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/credit-based-enrollments/03-credit-based-enrollments-sgc-course-exporer.webp"
alt="Small Group Course Explorer showing upcoming courses available for credit
redemption" width="100%"}

Once a family confirms their booking, we land them on a success page that
restates what they just enrolled in, the updated credit balance, and the next
steps for joining their first session. Closing the loop here mattered, families
used to drop off after enrollment unsure whether anything actually happened, and
giving them a clear confirmation immediately translated into fewer support
tickets and a noticeable lift in first-session attendance for Small Group
Courses.

:product-image{src="https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/credit-based-enrollments/03-credit-based-enrollments-sgc-schedule-success.webp"
alt="Small Group Course enrollment success page confirming the booking and
updated credit balance" width="100%"}
