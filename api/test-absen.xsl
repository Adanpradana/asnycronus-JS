<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/TR/WD-xsl">
  <xsl:template match="/">
    <HTML>
      <BODY>
        <TABLE style="font:8pt Arial" border="1" CELLSPACING="0" CELLPADDING="1" BGCOLOR="#FFFFFF">
          <THEAD style="font:bold; background-color:#C0C0C0">
            <TR valign="top">
              <xsl:for-each select="/GRID/COLUMNS/COLUMN">
                <TD align="left">
                  <xsl:attribute name="width"><xsl:value-of select="@Width"/></xsl:attribute>
                  <xsl:value-of select="@Caption"/>
                </TD>
              </xsl:for-each>
            </TR>
          </THEAD>
          <xsl:for-each select="GRID/ROWS/ROW">
          <TR valign="top">
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogscan_date"/>
              <xsl:if test="@dbg_scanlogscan_date[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogtgl"/>
              <xsl:if test="@dbg_scanlogtgl[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogjam"/>
              <xsl:if test="@dbg_scanlogjam[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogpin"/>
              <xsl:if test="@dbg_scanlogpin[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogpegawai_nip"/>
              <xsl:if test="@dbg_scanlogpegawai_nip[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogpegawai_nama"/>
              <xsl:if test="@dbg_scanlogpegawai_nama[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogpembagian1_nama"/>
              <xsl:if test="@dbg_scanlogpembagian1_nama[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogpembagian2_nama"/>
              <xsl:if test="@dbg_scanlogpembagian2_nama[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogpembagian3_nama"/>
              <xsl:if test="@dbg_scanlogpembagian3_nama[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogverifymode"/>
              <xsl:if test="@dbg_scanlogverifymode[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanloginoutmode"/>
              <xsl:if test="@dbg_scanloginoutmode[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogwork_code"/>
              <xsl:if test="@dbg_scanlogwork_code[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogsn"/>
              <xsl:if test="@dbg_scanlogsn[.='']">&#160;</xsl:if>
            </TD>
            <TD align="left">
              <xsl:value-of select="@dbg_scanlogdevice_name"/>
              <xsl:if test="@dbg_scanlogdevice_name[.='']">&#160;</xsl:if>
            </TD>
          </TR>
          </xsl:for-each>
        </TABLE>
      </BODY>
    </HTML>
  </xsl:template>
</xsl:stylesheet>
