/**
 * Rule Engine Service
 * Handles inactivity gap logic and violation detection
 */

const AdminSettings = require('../models/AdminSettings');
const timeUtil = require('../utils/time.util');

class RuleEngine {
  /**
   * Check if commit creates an inactivity violation
   * @param {Date} lastCommitDate
   * @param {Date} currentCommitDate
   * @returns {Object} { gap, status, isViolation }
   */
  static async checkInactivityViolation(lastCommitDate, currentCommitDate) {
    const settings = await AdminSettings.findOne();

    const gap = timeUtil.getGapInHours(lastCommitDate, currentCommitDate);
    const maxGap = settings?.maxInactivityGapHours || 24;
    const gracePeriod = settings?.gracePeriodHours || 12;
    const warningThreshold = settings?.warningThresholdHours || 20;

    let status = 'OK';
    let isViolation = false;

    if (gap > maxGap + gracePeriod) {
      status = 'VIOLATION';
      isViolation = true;
    } else if (gap > warningThreshold) {
      status = 'WARNING';
    }

    return { gap, status, isViolation };
  }

  /**
   * Validate multiple rules for a commit
   * @param {Object} commitData
   * @returns {Object} validation result
   */
  static async validateCommit(commitData) {
    const result = {
      isValid: true,
      violations: [],
      warnings: [],
    };

    // Check inactivity gap if previous commit exists
    if (commitData.previousCommitDate) {
      const gapCheck = await this.checkInactivityViolation(
        commitData.previousCommitDate,
        commitData.commitDate
      );

      if (gapCheck.isViolation) {
        result.isValid = false;
        result.violations.push(`Inactivity gap of ${gapCheck.gap} hours exceeds limit`);
      } else if (gapCheck.status === 'WARNING') {
        result.warnings.push(`Inactivity gap of ${gapCheck.gap} hours approaching limit`);
      }

      result.gap = gapCheck.gap;
      result.status = gapCheck.status;
    }

    return result;
  }
}

module.exports = RuleEngine;
