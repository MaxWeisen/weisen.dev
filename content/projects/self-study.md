---
title: Self-Study
company: Revolution Prep
description:
  A self-paced 12-week SAT and ACT prep product that gives students a guided
  study plan, weekly lessons, in-app practice exams, and a path to a free
  strategy session with an advisor.
video: https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/self-study/self-study-overview.webm
url: "/projects/self-study"
tags: ["Full Stack", "UX Design", "Frontend"]
technologies: ["vue", "ruby", "typeform"]
date: "2024"
---

## Overview

In support of our B2B partnership with [NCSA](https://www.ncsasports.org/), we
built the Self-Study product. Self-Study is Revolution Prep's self-paced exam
prep product. It's a 12-week guided program for the SAT and ACT that lives as a
dedicated tab on the student dashboard. Students set a target score and an exam
date, then work their way through a weekly lesson tree, challenging themselves on
practice questions and taking full-length practice exams along the way.

The product is built around momentum. A countdown to the next official exam sits
at the top of the dashboard. Each week unlocks a new set of lessons that
students can check off as they go. A best-score and improvement graph shows how
their practice exams have trended. And when a student wants more help, a "Claim
Free Strategy Session" CTA puts them in touch with an advisor, a natural upgrade
path from self-paced to live tutoring.

:product-video{src="https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/self-study/self-study-overview.webm"
alt="Self-Study overview" width="100%"}

## The Challenge

- Self-paced products live or die on whether the student actually keeps going.
  The lesson tree, weekly cadence, and progress indicators had to be designed to
  make returning feel rewarding instead of like homework.
- The upgrade path to live tutoring needed to be present but not pushy. The
  strategy session CTA had to feel like a helpful next step.

## Motivation

- Live tutoring is a high-touch, premium product. Many families want test prep
  but aren't ready for that price point. Self-Study gives them a real study aid
  instead of being told "we don't have anything for you."
- Self-Study also unlocks new bundling opportunities with partners who want to
  provide a study option for students upon initial login.

## Goals

- A genuinely useful test prep product that doesn't require a tutor to be
  effective.
- A clear path from self-paced study into a strategy session, and from there
  into live tutoring when the family is ready.

---

# Product Walkthrough

## Setting Goals

Self-Study starts with the student setting a target score and an exam date. The
exam date drives the countdown and the weekly cadence, and the target score
gives the student something concrete to measure their practice against.

:product-image{src="https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/self-study/01-self-study-goals.webp"
alt="Setting a target score and exam date in Self-Study" width="100%"}

## The Course Page

The course page is where students spend most of their time. A countdown to the
next official exam sits at the top, and below it the weekly lesson tree unlocks
a new set of lessons each week. As the student completes each lesson, their
completion status and score (if applicable) are rendered. On the right side of
the page a best-score and improvement graph shows how their practice exams have
trended over time. The whole page is built to make returning each week feel
rewarding.

:product-image{src="https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/self-study/02-self-study-course-page.webp"
alt="The Self-Study course page with countdown, lesson tree, and improvement
graph" width="100%"}

## Quiz Integration

Each lesson challenges the student with practice questions woven directly into
the flow. We manage quiz content and handle scoring in our Typeform integration.
Their progress is saved to our backend via a webhook from Typeform.

:product-image{src="https://max-dev-portfolio.s3.us-west-1.amazonaws.com/projects/revolution-prep/self-study/03-self-study-quiz-integration.webp"
alt="Practice quiz integrated into a Self-Study lesson" width="100%"}
